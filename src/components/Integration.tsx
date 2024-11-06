import React from 'react';

export default function Integration() {
  return (
    <div id="docs" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Integration
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple to integrate, powerful to use
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Add our AI-powered search to your website with just a few lines of code
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <pre className="p-4 text-sm leading-6 text-gray-100 overflow-x-auto">
                <code>{`// 1. Add our script to your HTML
<script src="https://cdn.searchai.com/widget.js"></script>

// 2. Initialize the search bar
<script>
  SearchAI.init({
    apiKey: 'your_api_key',
    selector: '#search-container',
    theme: 'light',
    placeholder: 'Search your website...'
  });
</script>

// 3. Add the search container
<div id="search-container"></div>`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Or use our React component
            </h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <pre className="p-4 text-sm leading-6 text-gray-100 overflow-x-auto">
                <code>{`import { SearchAI } from '@searchai/react';

function App() {
  return (
    <SearchAI 
      apiKey="your_api_key"
      theme="light"
      placeholder="Search your website..."
      onResult={(result) => {
        console.log(result.answer, result.sources);
      }}
    />
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}