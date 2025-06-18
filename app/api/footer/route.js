// // app/api/footer/route.js

// import { models } from "@/lib/connections";
// const { Footer } = models;

// export async function GET() {
//   try {
//     const footer = await Footer.findOne();
//     if (!footer) {
//       return new Response(JSON.stringify({ message: "Footer not found" }), { status: 404 });
//     }

//     return new Response(JSON.stringify(footer), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: error.message }), { status: 500 });
//   }
// }
