import { defineSchema } from "convex/server";
import { projectsTables } from "./tables";

const schema = defineSchema({
  ...projectsTables,
});

export default schema;
