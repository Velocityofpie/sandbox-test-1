import React from "react";

const ExcelTabCategories = () => {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-900 shadow">
      <h2 className="text-2xl font-bold mb-4">Excel Categories</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold text-lg mb-2">Financial Data</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Budget Templates
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Income Statements
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Cash Flow Analysis
            </li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold text-lg mb-2">Project Management</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Gantt Charts
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Task Trackers
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Resource Allocation
            </li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold text-lg mb-2">Data Analysis</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pivot Tables
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Statistical Models
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Data Visualization
            </li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold text-lg mb-2">Business Operations</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Inventory Management
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sales Tracking
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Customer Database
            </li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold text-lg mb-2">HR Templates</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Employee Schedules
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Performance Reviews
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Attendance Tracking
            </li>
          </ul>
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold text-lg mb-2">Learning Resources</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Formula Guides
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Macro Tutorials
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              VBA Examples
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 border rounded-lg bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20">
        <h3 className="font-semibold text-lg mb-2">Featured Template</h3>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-2/3">
            <p className="text-sm mb-3">
              Our comprehensive business dashboard template combines financial tracking, 
              inventory management, and sales analytics in one powerful Excel workbook.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Download Template
            </button>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 md:w-1/3 flex justify-center">
            <div className="w-24 h-24 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelTabCategories;