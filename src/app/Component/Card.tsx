"use client";

import Link from "next/link";
import {
  FiMapPin,
  FiGrid,
  FiLayers,
  FiHome,
  FiEye,
  FiShare2,
  FiGlobe
} from "react-icons/fi";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CardsProps {
  id: string;
  projectName: string;
  area: { name: string };
  priceMin?: number;
  priceMax?: number;
  projectType: string[];
  images: { url: string }[];
  builder: { name: string };
  unitTypes: string;
  reraNumber?: string;
  projectSpecification: {
    minSize: string;
    maxSize: string;
    measurementUnit?: string;
    price?: number;
  }[];
  status: string;
}

const Cards = ({
  id,
  projectName,
  area,
  priceMin = 0,
  priceMax = 0,
  projectType,
  images = [],
  builder,
  unitTypes,
  reraNumber = "",
  projectSpecification = [],
  status = "Available",
}: CardsProps) => {
  const [minSize, setMinSize] = useState<number | null>(null);
  const [maxSize, setMaxSize] = useState<number | null>(null);
  const [unit, setUnit] = useState<string>("");

//   useEffect(() => {
//     const sizeParser = () => {
//       if (projectSpecification.length > 0) {
//         const parsedSpecs = projectSpecification.map((spec) => ({
//           ...spec,
//           minSize: Number(spec.minSize),
//           maxSize: Number(spec.maxSize),
//         }));

//         const min = Math.min(...parsedSpecs.map((s) => s.minSize));
//         const max = Math.max(...parsedSpecs.map((s) => s.maxSize));
//         const u = parsedSpecs[0]?.measurementUnit || "";

//         setMinSize(min);
//         setMaxSize(max);
//         setUnit(u);
//       }
//     };

//     sizeParser();
//   }, [projectSpecification]);

  const formatToIndianUnits = (num?: number) => {
    if (!num) return "On Request";
    if (num >= 1e7) {
      return `₹ ${(num / 1e7).toFixed(2)} Cr`;
    } else if (num >= 1e5) {
      return `₹ ${(num / 1e5).toFixed(2)} Lac`;
    } else {
      return `₹ ${num.toLocaleString("en-IN")}`;
    }
  };

  const handleShare = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    await navigator.share({
      title: "Check out this project",
      text: projectName,
      url: `${window.location.origin}/project-page/${id}`,
    });
  };

  const price = formatToIndianUnits(projectSpecification[0]?.price);

  return (
    <div key={id} className="relative w-full">
      <div className="absolute top-[14.25rem] -left-2 z-10">
        <div className="bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-sm flex items-center shadow-lg relative">
          <span>{status}</span>
        </div>
        <div
          className="absolute top-full left-1 w-0 h-0"
          style={{
            borderLeft: "7px solid transparent",
            borderTop: "7px solid #dc2626",
            marginLeft: "-1px",
          }}
        ></div>
      </div>
      <div className="relative w-full overflow-hidden rounded-xl">
        <div className="bg-white overflow-hidden flex flex-col h-full ">
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={images[0]?.url || "/building1.jpg"}
              alt={projectName}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-5 pb-3 flex-1">
            <div className="flex justify-between items-start">
              <div className="min-h-[3.5rem] w-full mr-4">
                <h3 className="text-gray-900 text-xl font-bold line-clamp-2 h-full">
                  {projectName}
                </h3>
              </div>
              <div className="text-right flex-shrink-0">
                {/* <div className="text-red-600 text-2xl font-bold flex items-center justify-end">
                  <span>
                    {price === "On Request" ? (
                      "On Request"
                    ) : (
                      <div>
                        {price} <p className="text-sm ml-1">onwards</p>
                      </div>
                    )}
                  </span>
                </div> */}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-5">
              <div className="mt-3 flex items-center text-gray-60 0">
                <FiGlobe className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-sm">
                  {builder ? builder.name : "Unknown"}
                </span>
              </div>

              <div className="mt-3 flex items-center text-gray-600">
                <FiMapPin className="h-4 w-4 text-red-600 mr-1" />
                <span className="text-sm">{area ? area.name : "Unknown"}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 mt-4">
              <div className="flex items-center">
                <FiLayers className="h-4 w-4 text-red-600 mr-2" />
                {/* <div>
                  <p className="text-xs text-gray-500">Size</p>
                  <p className="text-sm font-medium">
                    {minSize} - {maxSize} {unit}
                  </p>
                </div> */}
              </div>

              <div className="flex items-center">
                <FiGrid className="h-4 w-4 text-red-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">Units</p>
                  <p className="text-sm font-medium">
                    {unitTypes || "-"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="shrink-0 mt-1">
                  <FiHome className="h-4 w-4 text-red-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Type</p>
                  <p className="text-sm font-medium break-words">
                    {projectType.map((pType) => pType).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 pb-5 pt-3 ">
            <div className="flex justify-between">
              <Link
                href={`/project-page/${id}`}
                className="text-red-600 text-sm font-medium flex items-center hover:text-red-800 transition-colors"
              >
                <FiEye className="mr-1" /> View Details
              </Link>
              <button
                onClick={(e) => handleShare(e, id)}
                className="text-gray-600 text-sm font-medium flex items-center hover:text-gray-800 transition-colors"
              >
                <FiShare2 className="mr-1" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
