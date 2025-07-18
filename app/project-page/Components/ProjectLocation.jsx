"use client";
const ProjectLocation = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
      <h2 className="text-2xl font-semibold mb-8 text-gray-900">
        Location
      </h2>

      <div className="h-112 w-full bg-gray-100 rounded-xl mb-8 relative overflow-hidden border border-gray-200">
        {project?.mapLink && (
          <iframe
            src={project.mapLink}
            width="800"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        )}
      </div>

      {/* <div className="space-y-6">
        <div className="flex gap-6">
          <span className="text-gray-500 w-28 text-sm">Area:</span>
          <span className="text-gray-900 font-medium text-sm">
            {project?.area?.name}
          </span>
        </div>
        <div className="flex gap-6">
          <span className="text-gray-500 w-28 text-sm">City:</span>
          <span className="text-gray-900 font-medium text-sm">
            {project?.city}
          </span>
        </div>
        <div className="flex gap-6">
          <span className="text-gray-500 w-28 text-sm">State:</span>
          <span className="text-gray-900 font-medium text-sm">
            {project?.state}
          </span>
        </div>
      </div> */}

      {project?.landmarks && (
        <div className="mt-10">
          <p className="text-gray-700 text-base leading-relaxed">
            {project.landmarks}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectLocation;




