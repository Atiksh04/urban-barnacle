import React from "react";

export default function FooterItem({ icon, label, selected }) {
  return (
    <div className={`flex flex-col items-center flex-1 text-xs rounded-none ${selected ? 'text-blue-600' : 'text-gray-500'}`}
      aria-current={selected ? 'page' : undefined}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </div>
  );
} 