import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: [
      '100,000 searches/month',
      'Basic AI responses',
      'Standard support',
      'Up to 1,000 pages indexed',
      'Basic analytics',
    ],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      '500,000 searches/month',
      'Advanced AI responses',
      'Priority support',
      'Up to 10,000 pages indexed',
      'Advanced analytics',
      'Custom styling',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Unlimited searches',
      'Custom AI model training',
      '24/7 dedicated support',
      'Unlimited pages indexed',
      'Custom analytics',
      'White-labeling',
      'Advanced API access',
      'SLA guarantee',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                </p>
                <button className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
                  Start free trial
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-between p-8">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}