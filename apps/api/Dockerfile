FROM node:lts-alpine AS builder

WORKDIR /build

COPY package*.json .

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm add -D @nestjs/cli

RUN pnpm run build

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /build/dist /app/dist
COPY --from=builder /build/node_modules /app/node_modules

EXPOSE 4000

CMD ["node", "dist/main.js"]
