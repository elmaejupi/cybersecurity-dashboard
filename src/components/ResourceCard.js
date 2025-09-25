import React from "react";

function ResourceCard({ resource }) {
  return (
    <div className="border rounded-lg shadow p-4 m-2 bg-white">
      <h2 className="font-bold text-lg">{resource.title}</h2>
      <p className="text-sm text-gray-700">{resource.description}</p>
      <span className="text-xs text-blue-500">{resource.category}</span>
      <br />
      <a 
        href={resource.link} 
        target="_blank" 
        rel="noreferrer"
        className="text-blue-700 underline text-sm"
      >
        Visit Resource
      </a>
    </div>
  );
}

export default ResourceCard;
