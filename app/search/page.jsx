// app/search/page.jsx
import SearchPage from "./SearchPage";

export default async function SearchPageServer({ searchParams }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  let initialProjects = [];
  
  try {
    // Await searchParams before using it (required in Next.js 15)
    const resolvedSearchParams = await searchParams;
    
    // Build query string from searchParams
    const query = new URLSearchParams();
    
    // Add all search parameters to the query
    Object.entries(resolvedSearchParams || {}).forEach(([key, value]) => {
      if (value) {
        query.set(key, value);
      }
    });
    
    const queryString = query.toString();

    // console.log(queryString);
    
    // Fetch initial data on server
    const response = await fetch(`${baseUrl}/api/search?${queryString}`, {
      cache: 'force-cache' // Ensure fresh data
    });
    
    if (response.ok) {
      initialProjects = await response.json();
      console.log("response", initialProjects);
    }
    
  } catch (error) {
    console.error("Error fetching initial projects:", error);
    // Continue with empty array on error
  }
  
  return <SearchPage initialProjects={initialProjects} />;
}



