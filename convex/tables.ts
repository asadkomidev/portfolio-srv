import { defineTable } from "convex/server";
import { v } from "convex/values";

export const projectsTables = {
  projects: defineTable({
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    sourceCode: v.optional(v.string()),
    liveDemo: v.optional(v.string()),
    archived: v.optional(v.boolean()),
    type: v.optional(
      v.union(
        v.literal("shipped"),
        v.literal("cooking"),
        v.literal("sides"),
        v.literal("archived")
      )
    ),
  }).index("name", ["name"]),
};
