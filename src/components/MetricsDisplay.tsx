import React from 'react';
import { University } from '../data/universities';
import { MetricCard } from './MetricCard';
import { Globe2, Users, Link, BookOpen, Trophy, Share2 } from 'lucide-react';

interface MetricsDisplayProps {
  university: University | null;
}

export function MetricsDisplay({ university }: MetricsDisplayProps) {
  if (!university) {
    return null;
  }

  const metrics = [
    {
      title: 'Presence',
      value: university.metrics.presence.toLocaleString(),
      icon: <Globe2 size={24} />,
      description: 'Number of pages on the main webdomain'
    },
    {
      title: 'Visibility',
      value: university.metrics.visibility.toLocaleString(),
      icon: <Users size={24} />,
      description: 'Number of external networks originating backlinks'
    },
    {
      title: 'Transparency',
      value: university.metrics.transparency.toLocaleString(),
      icon: <Link size={24} />,
      description: 'Number of citations from Top authors'
    },
    {
      title: 'Excellence',
      value: university.metrics.excellence.toLocaleString(),
      icon: <Trophy size={24} />,
      description: 'Number of papers amongst the top 10% most cited'
    },
    {
      title: 'Impact',
      value: university.metrics.impact.toLocaleString(),
      icon: <Share2 size={24} />,
      description: 'Quality of citations and backlinks'
    },
    {
      title: 'Openness',
      value: university.metrics.openness.toLocaleString(),
      icon: <BookOpen size={24} />,
      description: 'Number of cited research papers'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        {university.name} Metrics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            description={metric.description}
          />
        ))}
      </div>
    </div>
  );
}