import Footer from "../Components/Footer.jsx";

export default async function FooterPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footer`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch footer data");
  }

  const { footer } = await res.json();

  return <Footer footerData={footer} />;
}


// // Components/Footer.jsx
// "use client";

// import { useEffect, useState } from "react";

// export default function Footer() {
//   const [footerData, setFooterData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchFooter = async () => {
//       try {
//         const res = await fetch("/api/footer");
//         if (!res.ok) throw new Error("Failed to fetch");
//         const { footer } = await res.json();
//         setFooterData(footer);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchFooter();
//   }, []);

//   if (error) return <div>Error: {error}</div>;
//   if (!footerData) return <div>Loading...</div>;

//   return (
//     <footer>
//       <p>{footerData.text}</p> {/* Update based on your API shape */}
//     </footer>
//   );
// }
