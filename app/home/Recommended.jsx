// app/components/Recommended.jsx
import React from 'react';
import Cards from '../Components/Cards.jsx';

async function fetchProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/Recommended`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("SSR fetch error:", error);
    return [];
  }
}

export default async function Recommended() {
  const projects = await fetchProjects();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <p className="text-gray-600 mt-1">
              The Perfect Project Hub for your next home
            </p>
          </div>
          <a href="/search" className="text-red-600 font-medium hover:underline">
            View all Projects →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project._id}
              className="hover:shadow-md bg-white rounded-xl shadow-lg"
            >
              <Cards
                project={project}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
