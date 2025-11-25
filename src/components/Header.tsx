import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
  activeView: string;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen, activeView }) => {
  const getTitle = () => {
    switch (activeView) {
      case 'dashboard': return 'Dashboard';
      case 'employees': return 'Employee Management';
      case 'tasks': return 'Task Management';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center">
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <h1 className="ml-2 md:ml-0 text-xl font-semibold text-gray-800">
            {getTitle()}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              placeholder="Search..."
            />
          </div>

          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
