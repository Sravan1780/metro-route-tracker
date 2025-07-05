import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">🚇 Metro Minimize</h1>
            </div>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Routes
              </a>
              <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;