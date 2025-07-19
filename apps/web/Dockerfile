FROM node:lts-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN pnpm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /.next /app/.next
COPY --from=builder /package.json /app/package.json
COPY --from=builder /node_modules /app/node_modules

EXPOSE 3000

CMD ["next", "start"]
