"use client";

import Cards from "../Component/Card";

export default function RecommendedCards() {
  const mockData = {
    id: "1",
    projectName: "Sunshine Heights",
    area: { name: "Andheri West" },
    priceMin: 8000000,
    priceMax: 14000000,
    projectType: ["Apartment", "3 BHK"],
    images: [{ url: "/building1.jpg" }],
    builder: { name: "Skyline Developers" },
    unitTypes: "2 BHK, 3 BHK",
    reraNumber: "P12345678",
    projectSpecification: [
      {
        minSize: "650",
        maxSize: "1200",
        measurementUnit: "sqft",
        price: 9000000,
      },
    ],
    status: "Ready to Move",
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Recommended Projects</h2>
      <Cards {...mockData} />
    </div>
  );
}
