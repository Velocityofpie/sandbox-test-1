import React, { useState } from "react";

const NavbarDemo = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [username, setUsername] = useState("JohnDoe");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle authentication (for demo purposes)
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  // Navigate to page (for demo)
  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Navbar */}
      <header
        className={`${
          darkMode ? "bg-gray-900" : "bg-gray-800"
        } shadow-lg sticky top-0 z-50 transition-colors duration-300`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and brand */}
            <div className="flex-shrink-0">
              <button
                onClick={() => navigateTo("home")}
                className="flex items-center text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2 font-bold text-lg">Expense Logger</span>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              <button
                onClick={() => navigateTo("dashboard")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center space-x-2 ${
                  activePage === "dashboard"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => navigateTo("invoices")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center space-x-2 ${
                  activePage === "invoices"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Invoices</span>
              </button>

              <button
                onClick={() => navigateTo("payment-cards")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center space-x-2 ${
                  activePage === "payment-cards"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span>Payment Cards</span>
              </button>

              <button
                onClick={() => navigateTo("wishlist")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 flex items-center space-x-2 ${
                  activePage === "wishlist"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>Wishlist</span>
              </button>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Theme toggle button */}
              <button
                onClick={toggleDarkMode}
                className="p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white"
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* User profile/login section */}
              <div className="hidden md:block">
                {isAuthenticated ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center space-x-2 bg-gray-700 px-3 py-2 rounded-md text-white hover:bg-gray-600 transition-colors"
                    >
                      <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                        {username.charAt(0).toUpperCase()}
                      </div>
                      <span>{username}</span>
                      <svg
                        className={`h-5 w-5 transition-transform duration-200 ${
                          isProfileOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Profile dropdown */}
                    {isProfileOpen && (
                      <div
                        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${
                          darkMode ? "bg-gray-800" : "bg-white"
                        } ring-1 ring-black ring-opacity-5 z-10`}
                      >
                        <button
                          onClick={() => navigateTo("profile")}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            darkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <svg
                            className="inline-block h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          Profile
                        </button>
                        <button
                          onClick={() => navigateTo("settings")}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            darkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <svg
                            className="inline-block h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          Settings
                        </button>
                        <div
                          className={`border-t ${
                            darkMode ? "border-gray-700" : "border-gray-200"
                          } my-1`}
                        ></div>
                        <button
                          onClick={toggleAuth}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            darkMode
                              ? "text-gray-300 hover:bg-gray-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <svg
                            className="inline-block h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Sign out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={toggleAuth}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    Login
                  </button>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-gray-700 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Open menu</span>
                  {!isMenuOpen ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden transition-all duration-200`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => navigateTo("dashboard")}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                  activePage === "dashboard"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => navigateTo("invoices")}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                  activePage === "invoices"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Invoices
              </button>
              <button
                onClick={() => navigateTo("payment-cards")}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                  activePage === "payment-cards"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Payment Cards
              </button>
              <button
                onClick={() => navigateTo("wishlist")}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                  activePage === "wishlist"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Wishlist
              </button>
              <button
                onClick={toggleDarkMode}
                className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Mobile authentication section */}
            <div className={`pt-4 pb-3 border-t border-gray-700`}>
              {isAuthenticated ? (
                <>
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium">
                        {username.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {username}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400 mt-1">
                        user@example.com
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <button
                      onClick={() => navigateTo("profile")}
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => navigateTo("settings")}
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Settings
                    </button>
                    <button
                      onClick={toggleAuth}
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="px-5 py-3">
                  <button
                    onClick={toggleAuth}
                    className="block w-full text-center px-3 py-2 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Demo content */}
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div
          className={`mt-8 p-6 rounded-lg ${
            darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
          } shadow transition-colors duration-300`}
        >
          <h2 className="text-2xl font-bold mb-4">
            Expense Logger •{" "}
            {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
          </h2>

          <p className="mb-6">
            This is a demo of the enhanced navbar component. Try clicking the
            different navigation items or toggling between light and dark mode.
            You can also try logging in/out with the buttons below.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`p-5 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h3 className="font-semibold text-lg mb-3">Current State:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Active Page:</strong> {activePage}
                </li>
                <li>
                  <strong>Theme:</strong>{" "}
                  {darkMode ? "Dark Mode" : "Light Mode"}
                </li>
                <li>
                  <strong>Auth Status:</strong>{" "}
                  {isAuthenticated ? "Logged In" : "Logged Out"}
                </li>
                {isAuthenticated && (
                  <li>
                    <strong>User:</strong> {username}
                  </li>
                )}
              </ul>

              <div className="mt-4 space-y-2">
                <button
                  onClick={toggleDarkMode}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm w-full"
                >
                  Toggle Dark Mode
                </button>
                <button
                  onClick={toggleAuth}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm w-full"
                >
                  {isAuthenticated ? "Log Out" : "Log In"}
                </button>
              </div>
            </div>

            <div
              className={`p-5 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h3 className="font-semibold text-lg mb-3">Navigation:</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigateTo("dashboard")}
                  className={`p-2 rounded text-sm ${
                    activePage === "dashboard"
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => navigateTo("invoices")}
                  className={`p-2 rounded text-sm ${
                    activePage === "invoices"
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  Invoices
                </button>
                <button
                  onClick={() => navigateTo("payment-cards")}
                  className={`p-2 rounded text-sm ${
                    activePage === "payment-cards"
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  Payment Cards
                </button>
                <button
                  onClick={() => navigateTo("wishlist")}
                  className={`p-2 rounded text-sm ${
                    activePage === "wishlist"
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  Wishlist
                </button>
                <button
                  onClick={() => navigateTo("profile")}
                  className={`p-2 rounded text-sm ${
                    activePage === "profile"
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => navigateTo("settings")}
                  className={`p-2 rounded text-sm ${
                    activePage === "settings"
                      ? "bg-indigo-600 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDemo;
