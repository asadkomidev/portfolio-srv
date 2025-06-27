import { query } from "./_generated/server";

export const projects = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").order("desc").collect();
    if (projects.length === 0) {
      return {
        cooking: [],
        shipped: [],
        sides: [],
        archived: [],
      };
    }
    const cooking = projects.filter((project) => project.type === "cooking");
    const shipped = projects.filter((project) => project.type === "shipped");
    const sides = projects.filter((project) => project.type === "sides");
    const archived = projects.filter((project) => project.type === "archived");
    return { cooking, shipped, sides, archived };
  },
});
