import { defineConfig, env } from "prisma/config";
// import "dotenv/config"; automatically loads the env variables when using the bun runtime 
export const DATABASE_URL="postgresql://postgres:itsnotthatserious@localhost:5432/postgres"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: DATABASE_URL,
  },
});
