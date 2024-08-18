import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  schema: "./db/schema.ts",
  dbCredentials: {
    user: process.env.SUPABASE_USER!,
    port: 5432,
    host: process.env.SUPABASE_HOST!,
    password: process.env.SUPABASE_PASSWORD!,
    database: "postgres",
  },
  verbose: true,
  out: "./drizzle",
} satisfies Config;
