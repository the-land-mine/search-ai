import React from 'react';
import { Zap, Search, Code, Shield, Gauge, Database } from 'lucide-react';

const features = [
  {
    name: 'Intelligent Search',
    description: 'Advanced AI algorithms understand context and user intent for more accurate results.',
    icon: Search,
  },
  {
    name: 'Easy Integration',
    description: 'Simple API and drop-in components for quick implementation in any website.',
    icon: Code,
  },
  {
    name: 'Secure & Private',
    description: 'Enterprise-grade security with data encryption and privacy controls.',
    icon: Shield,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized performance with response times under 100ms.',
    icon: Gauge,
  },
  {
    name: 'Smart Indexing',
    description: 'Automatic content indexing with custom crawling schedules.',
    icon: Database,
  },
  {
    name: 'Real-time Updates',
    description: 'Content updates are reflected instantly in search results.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for intelligent search
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Powerful features to enhance your website's search capabilities and user experience.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute -top-4 left-4">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}