FROM oven/bun:1

WORKDIR /usr/src/app

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock
COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws/package.json ./apps/ws/package.json

RUN bun install

COPY ./apps/ws ./apps/ws

# REMEMBER that you never migrate the database in a CI/CD pipeline, you do it manually
RUN bun run db:generate

EXPOSE 8081

CMD ["bun", "run", "start:ws"]