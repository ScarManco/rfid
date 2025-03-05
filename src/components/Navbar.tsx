import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Radio, LayoutDashboard, LogOut } from 'lucide-react';
import { supabase } from '../App';

function Navbar() {
  const location = useLocation();
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/map', icon: MapPin, label: 'Mapa' },
    { path: '/sensors', icon: Radio, label: 'Sensores' },
  ];

  return (
    <nav className="w-64 min-h-screen bg-white shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">RFID Control</h1>
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 w-64 p-4">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 p-3 w-full text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;