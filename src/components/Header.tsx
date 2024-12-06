import React from 'react';
import { Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe size={32} />
            <h1 className="text-3xl font-bold">Webometrics Dashboard</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#metrics" className="hover:text-blue-200 transition-colors">Metrics</a></li>
              <li><a href="#about" className="hover:text-blue-200 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}