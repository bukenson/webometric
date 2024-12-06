import React from 'react';
import { MetricCard } from './MetricCard';
import { Globe2, Users, Link, BookOpen, Trophy, Share2 } from 'lucide-react';

export function MetricsGrid() {
  const metrics = [
    {
      title: 'Presence',
      value: '15,234',
      icon: <Globe2 size={24} />,
      description: 'Number of pages on the main webdomain'
    },
    {
      title: 'Visibility',
      value: '8,976',
      icon: <Users size={24} />,
      description: 'Number of external networks originating backlinks'
    },
    {
      title: 'Transparency',
      value: '12,543',
      icon: <Link size={24} />,
      description: 'Number of citations from Top authors'
    },
    {
      title: 'Excellence',
      value: '5,678',
      icon: <Trophy size={24} />,
      description: 'Number of papers amongst the top 10% most cited in 26 disciplines'
    },
    {
      title: 'Impact',
      value: '9,321',
      icon: <Share2 size={24} />,
      description: 'Quality of citations and backlinks'
    },
    {
      title: 'Openness',
      value: '7,654',
      icon: <BookOpen size={24} />,
      description: 'Number of cited research papers'
    }
  ];

  return (
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
  );
}