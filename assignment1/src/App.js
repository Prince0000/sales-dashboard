import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import TodaySalesDashboard from './components/TodaySalesDashboard';
import SalesComparisonDashboard from './components/SalesComparisonDashboard';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`mr-4 ${isActive ? 'text-blue-700 font-bold' : 'text-white'} hover:underline`}
    >
      {children}
    </Link>
  );
};

const App = () => {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        <nav className="mb-4 bg-gray-800 p-3 rounded">
          <NavLink to="/" className="text-white">Today's Sales</NavLink>
          <NavLink to="/comparison" className="text-white">Sales Comparison</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<TodaySalesDashboard />} />
          <Route path="/comparison" element={<SalesComparisonDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
