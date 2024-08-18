import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const blogViews = pgTable("blog_views", {
  slug: varchar("slug", { length: 255 }).primaryKey(),
  count: integer("count").default(0),
})

export const projectViews = pgTable("project_views", {
  slug: varchar("slug", { length: 255 }).primaryKey(),
  count: integer("count").default(0),
})

export type BlogViews = typeof blogViews.$inferSelect;
export type ProjectViews = typeof projectViews.$inferSelect;
