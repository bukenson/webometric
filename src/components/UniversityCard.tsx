import React from 'react';
import { University } from '../types/university';
import { Building2, Globe, Trophy } from 'lucide-react';
import { calculateOverallScore } from '../utils/rankingUtils';

interface UniversityCardProps {
  university: University;
  onSelect: (university: University) => void;
  rank: number;
}

export function UniversityCard({ university, onSelect, rank }: UniversityCardProps) {
  const score = calculateOverallScore(university.metrics);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow relative"
      onClick={() => onSelect(university)}
    >
      <div className="absolute -top-3 -right-3 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
        <span className="text-sm font-bold">#{rank}</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Building2 className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">{university.name}</h3>
        </div>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Globe className="h-4 w-4 mr-2" />
        <a 
          href={`https://${university.website}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {university.website}
        </a>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-600">
          Location: {university.location}
        </div>
        <div className="flex items-center text-blue-600">
          <Trophy className="h-4 w-4 mr-1" />
          <span className="font-semibold">{score.toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
}