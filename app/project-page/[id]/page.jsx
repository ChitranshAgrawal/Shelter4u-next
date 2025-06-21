// app/project/[id]/page.jsx
import ProjectClientPage from "./ProjectClientPage";

async function getProjectDetails(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/project-page/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    console.log("error"); 
  }

  return res.json();
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = await getProjectDetails(id);

  return (
    <ProjectClientPage project={project} />
  );
}
