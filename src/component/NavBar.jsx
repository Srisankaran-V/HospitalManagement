import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from './DropDown';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


const NavBar = ({ hospitalName = 'Enter the Name' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const {logout} = useContext(AuthContext);

  const navItems = [
    { id: 1, title: 'Home', path: '/' },
    {
      id: 2,
      title: 'Patient',
      path: '/patient',
      children: [
        { id: 1, title: 'Add Patients', path: '/patient/add' },
        { id: 2, title: 'All Patients', path: '/patient/all' },
      ],
    },
    {
      id: 4,
      title: 'Doctor',
      path: '/doctor',
      children: [
        { id: 1, title: 'Appointment', path: '/doctor/appointment/' },
        { id: 2, title: 'Doctors List', path: '/doctor/doctorslist' },
        { id: 3, title: 'Schedules', path: '/doctor/schedules' },
      ],
    },
    {
      id: 5,
      title: 'Drug',
      path: '/drug',
      children: [
        { id: 1, title: 'Add Drug', path: '/drug/add_drug' },
        { id: 2, title: 'All Drug', path: '/drug/all_drug' },
      ],
    },
  ];

  const handleLogout = () => {
    // Perform logout logic
    logout();
  };

  return (
    <nav className="bg-indigo-700 border-b border-indigo-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Hospital Name */}
          <NavLink className="flex items-center mr-4" to="/">
            <img className="h-10 w-auto" src="src/assets/images/mslogo.png" alt="Logo" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2 tracking-wide leading-snug italic">
              {hospitalName}
            </span>
          </NavLink>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              item.children ? (
                <DropDown key={item.id} title={item.title} options={item.children} />
              ) : (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className="block px-3 py-2 text-white hover:bg-indigo-800 rounded-md"
                  >
                    {item.title}
                  </NavLink>
                </li>
              )
            )}

            {/* Logout Button */}
            <li>
              <button
                className="ml-4 px-3 py-2  text-white hover:bg-red-700 rounded-md"
                onClick={() => setIsLogoutConfirmOpen(true)}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-indigo-700 rounded-md mt-2 space-y-2 p-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.id} className="space-y-2">
                  <DropDown title={item.title} options={item.children} />
                </div>
              ) : (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className="block px-3 py-2 text-white hover:bg-indigo-800 rounded-md"
                >
                  {item.title}
                </NavLink>
              )
            )}

            {/* Mobile Logout Button */}
            <button
              className="block w-full px-3 py-2  text-white hover:bg-red-700 rounded-md"
              onClick={() => setIsLogoutConfirmOpen(true)}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutConfirmOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-700 mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                onClick={() => setIsLogoutConfirmOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

NavBar.propTypes = {
  hospitalName: PropTypes.string,
};

export default NavBar;
