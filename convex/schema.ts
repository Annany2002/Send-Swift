import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const fileTypes = v.union(
  v.literal("image"),
  v.literal("csv"),
  v.literal("pdf")
);

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
  }).index("by_tokenIdentifier", ["tokenIdentifier"]),

  files: defineTable({
    name: v.string(),
    type: fileTypes,
    fileId: v.id("_storage"),
    userId: v.id("users"),
    shouldDelete: v.optional(v.boolean()),
  })
    .index("by_shouldDelete", ["shouldDelete"])
    .index("by_userId", ["userId"]),

  favorites: defineTable({
    fileId: v.id("files"),
    userId: v.id("users"),
  }).index("by_userId", ["userId"]),
});
