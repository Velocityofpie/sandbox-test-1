import React, { useState, useEffect } from 'react';

const ExpenseTab = () => {
  // State for active main tab (Camera, Server, Home Network)
  const [activeMainTab, setActiveMainTab] = useState('Camera');
  
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dateFilter, setDateFilter] = useState('all');
  const [currentView, setCurrentView] = useState('category'); // 'category', 'store', 'date'
  const [isLoading, setIsLoading] = useState(false);

  // Mock Categories for each tab - in a real app these would be fetched from the backend
  const categoriesByTab = {
    'Camera': ['All', 'Cameras', 'Lenses', 'Accessories', 'Storage', 'Tripods'],
    'Server': ['All', 'CPUs', 'Storage', 'RAM', 'Cases', 'Cooling'],
    'Home Network': ['All', 'Routers', 'Switches', 'Access Points', 'Cables', 'Security']
  };

  // Mock Data for each tab
  const [mockDataByTab, setMockDataByTab] = useState({
    'Camera': [
      {
        id: 1,
        store: 'Amazon',
        orderNumber: 'Order # CAM-001',
        date: 'July 21, 2024',
        category: 'Accessories',
        total: 59.99,
        products: [
          { name: 'SmallRig Cage Kit for Sony A670', price: 59.99, quantity: 1 }
        ]
      },
      {
        id: 2,
        store: 'MAP CAMERA',
        orderNumber: 'Order# CAM-002',
        date: 'October 1, 2024',
        category: 'Lenses',
        total: 383.36,
        products: [
          { name: 'SONY E 11mm F1.8 SEL11F18', price: 383.36, quantity: 1 }
        ]
      },
      {
        id: 3,
        store: 'DELL',
        orderNumber: 'Order# CAM-003',
        date: 'August 11, 2024',
        category: 'Cameras',
        total: 1418.10,
        products: [
          { name: 'Alpha 6700 Camera', price: 1329.99, quantity: 1 },
          { name: 'Camera Warranty', price: 88.11, quantity: 1 }
        ]
      },
      {
        id: 4,
        store: 'Focus Camera',
        orderNumber: 'Order# CAM-004',
        date: 'September 15, 2024',
        category: 'Storage',
        total: 189.95,
        products: [
          { name: 'Lexar 256GB SDXC Memory Card', price: 189.95, quantity: 1 }
        ]
      }
    ],
    'Server': [
      {
        id: 1,
        store: 'Newegg',
        orderNumber: 'Order # SRV-001',
        date: 'June 12, 2024',
        category: 'CPUs',
        total: 699.99,
        products: [
          { name: 'AMD Ryzen 9 7950X', price: 699.99, quantity: 1 }
        ]
      },
      {
        id: 2,
        store: 'Amazon',
        orderNumber: 'Order# SRV-002',
        date: 'June 15, 2024',
        category: 'Storage',
        total: 429.99,
        products: [
          { name: '4TB NVMe SSD', price: 429.99, quantity: 1 }
        ]
      },
      {
        id: 3,
        store: 'Micro Center',
        orderNumber: 'Order# SRV-003',
        date: 'June 17, 2024',
        category: 'RAM',
        total: 299.99,
        products: [
          { name: '64GB DDR5 RAM Kit', price: 299.99, quantity: 1 }
        ]
      },
      {
        id: 4,
        store: 'Best Buy',
        orderNumber: 'Order# SRV-004',
        date: 'June 20, 2024',
        category: 'Cases',
        total: 199.99,
        products: [
          { name: 'Fractal Design Meshify 2', price: 149.99, quantity: 1 },
          { name: 'Additional Case Fans', price: 50.00, quantity: 1 }
        ]
      }
    ],
    'Home Network': [
      {
        id: 1,
        store: 'Amazon',
        orderNumber: 'Order # NET-001',
        date: 'May 5, 2024',
        category: 'Routers',
        total: 249.99,
        products: [
          { name: 'ASUS RT-AX86U Wi-Fi 6 Router', price: 249.99, quantity: 1 }
        ]
      },
      {
        id: 2,
        store: 'Ubiquiti Store',
        orderNumber: 'Order# NET-002',
        date: 'May 10, 2024',
        category: 'Access Points',
        total: 179.99,
        products: [
          { name: 'UniFi 6 Lite Access Point', price: 99.99, quantity: 1 },
          { name: 'Mounting Brackets', price: 10.00, quantity: 1 },
          { name: 'PoE Injector', price: 70.00, quantity: 1 }
        ]
      },
      {
        id: 3,
        store: 'Monoprice',
        orderNumber: 'Order# NET-003',
        date: 'May 15, 2024',
        category: 'Cables',
        total: 89.95,
        products: [
          { name: 'Cat6A Ethernet Cable 50ft', price: 29.99, quantity: 3 }
        ]
      },
      {
        id: 4,
        store: 'Newegg',
        orderNumber: 'Order# NET-004',
        date: 'May 20, 2024',
        category: 'Switches',
        total: 199.99,
        products: [
          { name: 'Managed 8-Port Gigabit Switch', price: 199.99, quantity: 1 }
        ]
      }
    ]
  });

  // Get the currently active data based on the main tab selection
  const currentTabData = mockDataByTab[activeMainTab] || [];
  const currentCategories = categoriesByTab[activeMainTab] || [];
  
  // Filter purchases based on selected category
  const filteredPurchases = currentTabData.filter(purchase => 
    selectedCategory === 'All' || purchase.category === selectedCategory
  );

  // Filter purchases based on date range (simplified for demo)
  const dateFilteredPurchases = filteredPurchases;

  // Calculate the sum of filtered items
  const filteredTotal = dateFilteredPurchases.reduce((sum, item) => sum + item.total, 0);

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  // Get data for current view
  const getViewData = () => {
    if (currentView === 'category') {
      // Group by category
      const grouped = {};
      dateFilteredPurchases.forEach(item => {
        if (!grouped[item.category]) {
          grouped[item.category] = {
            name: item.category,
            count: 0,
            total: 0,
            items: []
          };
        }
        grouped[item.category].count += 1;
        grouped[item.category].total += item.total;
        grouped[item.category].items.push(item);
      });
      return Object.values(grouped).sort((a, b) => b.total - a.total);
    } else if (currentView === 'store') {
      // Group by store
      const grouped = {};
      dateFilteredPurchases.forEach(item => {
        if (!grouped[item.store]) {
          grouped[item.store] = {
            name: item.store,
            count: 0,
            total: 0,
            items: []
          };
        }
        grouped[item.store].count += 1;
        grouped[item.store].total += item.total;
        grouped[item.store].items.push(item);
      });
      return Object.values(grouped).sort((a, b) => b.total - a.total);
    } else if (currentView === 'date') {
      // Group by month
      const grouped = {};
      dateFilteredPurchases.forEach(item => {
        const dateParts = item.date.split(' ');
        const month = `${dateParts[0]} ${dateParts[2]}`;
        
        if (!grouped[month]) {
          grouped[month] = {
            name: month,
            count: 0,
            total: 0,
            items: []
          };
        }
        grouped[month].count += 1;
        grouped[month].total += item.total;
        grouped[month].items.push(item);
      });
      return Object.values(grouped).sort((a, b) => {
        // Sort by date, most recent first
        const monthsOrder = {
          'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
          'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
        };
        
        const aName = a.name.split(' ');
        const bName = b.name.split(' ');
        
        const aYear = parseInt(aName[1]);
        const bYear = parseInt(bName[1]);
        
        if (aYear !== bYear) return bYear - aYear;
        
        return monthsOrder[bName[0]] - monthsOrder[aName[0]];
      });
    }
    
    return [];
  };
  
  const groupedData = getViewData();

  // Function to reset category when changing main tabs
  const handleMainTabChange = (tab) => {
    setActiveMainTab(tab);
    setSelectedCategory('All');
  };

  // Simulate adding a new item to a category for demonstration
  const handleAddItem = (tabName) => {
    setIsLoading(true);
    
    // Create a new mock purchase for the selected tab
    const newId = Math.max(...mockDataByTab[tabName].map(item => item.id)) + 1;
    const newItem = {
      id: newId,
      store: 'New Purchase',
      orderNumber: `Order# ${tabName.substring(0, 3).toUpperCase()}-${String(newId).padStart(3, '0')}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      category: categoriesByTab[tabName][1], // Use the first actual category (not 'All')
      total: 99.99,
      products: [
        { name: 'New Product', price: 99.99, quantity: 1 }
      ]
    };
    
    // Update the state with the new item
    setMockDataByTab(prevData => ({
      ...prevData,
      [tabName]: [...prevData[tabName], newItem]
    }));
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Expense Categories</h1>
        
        {/* Quick add button */}
        <button
          onClick={() => handleAddItem(activeMainTab)}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          )}
          Add Item
        </button>
      </div>
      
      {/* Main Tabs for Camera, Server, Home Network */}
      <div className="border-b mb-6">
        <div className="flex space-x-1">
          {Object.keys(mockDataByTab).map((tab) => (
            <button
              key={tab}
              onClick={() => handleMainTabChange(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 focus:outline-none ${
                activeMainTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {currentCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Time</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Group By
          </label>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentView('category')}
              className={`flex-1 px-3 py-2 border text-sm font-medium rounded-md ${
                currentView === 'category'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Category
            </button>
            <button
              onClick={() => setCurrentView('store')}
              className={`flex-1 px-3 py-2 border text-sm font-medium rounded-md ${
                currentView === 'store'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Store
            </button>
            <button
              onClick={() => setCurrentView('date')}
              className={`flex-1 px-3 py-2 border text-sm font-medium rounded-md ${
                currentView === 'date'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Date
            </button>
          </div>
        </div>
      </div>
      
      {/* Summary Card */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500">Total Expenses</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {formatCurrency(filteredTotal)}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500">Number of Purchases</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {dateFilteredPurchases.length}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-500">Average Purchase</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {formatCurrency(dateFilteredPurchases.length > 0 ? filteredTotal / dateFilteredPurchases.length : 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content - Category/Store/Date Groups */}
      <div className="space-y-6">
        {groupedData.map((group, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex justify-between items-center bg-gray-50 p-4 border-b">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{group.name}</h2>
                <p className="text-sm text-gray-500">
                  {group.count} {group.count === 1 ? 'purchase' : 'purchases'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(group.total)}
                </p>
                <p className="text-sm text-gray-500">
                  {Math.round((group.total / filteredTotal) * 100)}% of total
                </p>
              </div>
            </div>
            
            <div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Store
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order #
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Products
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {group.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.store}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.orderNumber}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          {item.products.map((product, prodIdx) => (
                            <li key={prodIdx} className={product.quantity < 0 ? "text-red-500" : ""}>
                              {product.name} 
                              {product.quantity !== 1 && ` (×${product.quantity})`}
                              <span className="ml-1 font-medium">
                                {formatCurrency(product.price)}
                              </span>
                              {product.quantity < 0 && " (Return)"}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                        <span className={item.total < 0 ? "text-red-600" : "text-gray-900"}>
                          {formatCurrency(item.total)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan="4" className="px-6 py-3 text-right text-sm font-medium text-gray-500">
                      Total for {group.name}
                    </td>
                    <td className="px-6 py-3 text-right text-sm font-bold text-gray-900">
                      {formatCurrency(group.total)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ))}
      </div>
      
      {/* No results message */}
      {groupedData.length === 0 && (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h3 className="mt-2 text-xl font-medium text-gray-900">No data found</h3>
          <p className="mt-1 text-gray-500">
            No expenses match your current filter criteria.
          </p>
          <div className="mt-6">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setDateFilter('all');
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
      
      {/* Export and Print Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        <button
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="mr-2 -ml-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Export CSV
        </button>
        <button
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="mr-2 -ml-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          Export Excel
        </button>
        <button
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => window.print()}
        >
          <svg className="mr-2 -ml-1 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
          </svg>
          Print
        </button>
      </div>
    </div>
  );
};

export default ExpenseTab;