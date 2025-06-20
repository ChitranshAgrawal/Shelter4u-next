"use client";

import { useState } from "react";
import ProjectTabSwitcher from "../Components/ProjectPageTabSwitcher.jsx";
import AmenitiesSection from "../Components/ProjectAmenities.jsx";
import ProjectGallery from "../Components/ProjectGallery.jsx";
import ProjectLocation from "../Components/ProjectLocation.jsx";
import ProjectSpecificationTable from "../Components/ProjectSpecification.jsx";
import { X } from "lucide-react";

const ProjectClientPage = ({ project }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  const toggleAmenities = () => setShowAllAmenities(!showAllAmenities);
  const openImageExpanded = (image) => setExpandedImage(image);
  const closeImageExpanded = () => setExpandedImage(null);

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Navigation Tabs */}
      <ProjectTabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Overview */}
      {activeTab === "overview" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">{project.projectName}</h1>
          <p>{project.description}</p>
        </div>
      )}

      {/* Amenities */}
      {activeTab === "amenities" && (
        <AmenitiesSection
          project={project}
          showAllAmenities={showAllAmenities}
          toggleAmenities={toggleAmenities}
        />
      )}

      {/* Gallery */}
      {activeTab === "gallery" && (
        <ProjectGallery
          galleryImages={project.galleryImages}
          openImageExpanded={openImageExpanded}
        />
      )}

      {/* Location */}
      {activeTab === "location" && (
        <ProjectLocation project={project} />
      )}

      {/* Specifications */}
      {activeTab === "specifications" && (
        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">
            Specifications
          </h2>
          <ProjectSpecificationTable
            specifications={project.projectSpecification}
            status={project.status}
          />
        </div>
      )}

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeImageExpanded}
            className="absolute top-6 right-6 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-6xl h-[90vh]">
            <img
              src={
                expandedImage?.url ||
                "https://placehold.co/600x400?text=Coming+Soon"
              }
              alt={expandedImage?.description || "Expanded Image"}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-6 left-0 right-0 text-center text-white">
              <p className="text-base">{expandedImage?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectClientPage;
