FROM node:lts-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy workspace configuration files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# Copy all package.json files to establish dependency graph
COPY packages/ ./packages/
COPY apps/web/package.json ./apps/web/
COPY apps/api/package.json ./apps/api/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/ ./packages/
COPY apps/web/ ./apps/web/

# Build the app
RUN pnpm --filter web run build

# Production stage
FROM node:lts-alpine AS runner

WORKDIR /app

# Install pnpm in production stage
RUN npm install -g pnpm

# Create nextjs user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy workspace configuration files
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/turbo.json ./turbo.json

# Copy built application and dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/apps/web ./apps/web

# Set permissions
RUN chown -R nextjs:nodejs /app

# Switch to nextjs user
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application using pnpm workspace command
CMD ["pnpm", "--filter", "web", "start"]
