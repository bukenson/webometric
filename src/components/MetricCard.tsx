import React from 'react';
import { Tooltip } from 'react-tooltip';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

export function MetricCard({ title, value, icon, description }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-blue-600">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div 
        data-tooltip-id={`tooltip-${title}`}
        className="text-sm text-gray-600 truncate cursor-help"
      >
        {description}
      </div>
      <Tooltip id={`tooltip-${title}`} place="bottom">
        {description}
      </Tooltip>
    </div>
  );
}