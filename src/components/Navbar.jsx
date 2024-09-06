import React from 'react';
import { Home, Flag, Calendar, Award, BarChart2, Settings, UserRound } from 'lucide-react';

const Navbar = ({ onCalendarClick, onAchievementsClick}) => {
  const navItems = [
    { name: 'Home', icon: <Home className="w-6 h-6" />, active: true },
    { name: 'My goals', icon: <Flag className="w-6 h-6" />, active: false },
    { name: 'Schedule', icon: <Calendar className="w-6 h-6" />, active: false, onClick: onCalendarClick },
    { name: 'Achievements', icon: <Award className="w-6 h-6" />, active: false, onClick: onAchievementsClick },
    { name: 'Statistics', icon: <BarChart2 className="w-6 h-6" />, active: false },
    { name: 'Settings', icon: <Settings className="w-6 h-6" />, active: false },
  ];

  return (
    <aside className="border-2 border-transparent border-r-gray-700 bg-gray-800 w-72 h-screen p-8 shadow-lg flex flex-col">
      <div className="bg-gray-700 rounded-lg p-6 mb-8">
        <UserRound className="w-28 h-28 bg-gray-600 text-gray-200 rounded-full mx-auto mb-4"/>
        <h2 className="text-center text-2xl font-bold text-gray-200">Gaurish Siwan</h2>
        <p className="text-center text-gray-400">Male, 21 years</p>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-xs text-gray-300">HEIGHT</p>
            <p className="font-semibold text-lg text-gray-200">175 cm</p>
          </div>
          <div>
            <p className="text-xs text-gray-300">WEIGHT</p>
            <p className="font-semibold text-lg text-gray-200">71 kg</p>
          </div>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4 text-lg">
          {navItems.map((item, index) => (
            <li 
              key={index}
              className={`flex items-center space-x-3 cursor-pointer ${
                item.active ? 'text-themeRed' : 'text-gray-500 hover:text-themeRed'
              }`}
              onClick={item.onClick}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
