import React from "react";

const categoryColors = {
  "Web Security": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  "Networking": "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  "CTFs": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  "Cryptography": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  "Cloud Security": "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
  "Malware Analysis": "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  "General Security": "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
};

function ResourceCard({ resource }) {
  return (
    <div className="border rounded-xl shadow-sm p-5 bg-white border-slate-200 text-slate-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
>
      <h2 className="font-bold text-xl mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
        {resource.title}
      </h2>
      <p className="text-sm text-slate-600 dark:text-gray-300 mb-3">{resource.description}</p>
      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${categoryColors[resource.category]} mb-4`}>
  {resource.category}
</span>

      <br />
      <a 
        href={resource.link} 
        target="_blank" 
        rel="noreferrer"
        className="inline-block text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline transition-colors duration-300"
      >
        🔗 Visit Resource
      </a>
    </div>
  );
}

export default ResourceCard;
