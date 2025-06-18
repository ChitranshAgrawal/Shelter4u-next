import { models } from "../../../../lib/connections.js";
// import { connectToDBs, Project, Area, Leads } from '@/lib/connections.js';
const { Project, Area, Leads } = models;

export async function GET(req) {
  try {
    // await connectToDBs();

    const projects = await Project.find({}, {
      projectName: 1,
      area: 1,
      builder: 1,
      priceMin: 1,
      priceMax: 1,
      projectType: 1,
      coverImages: 1,
      reraNumber: 1,
      projectSpecification: 1,
      status: 1,
      createdAt: 1,
    })
      // .populate("area", ["_id", "name"])
      // .populate("builder", ["_id", "name"])
      .sort({ createdAt: -1 });

    return new Response(JSON.stringify({ success: true, data: projects }), {
      status: 200,
    });
  } catch (error) {
    console.error("Project fetch error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
