import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const DropDown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggle}
        className="block px-4 py-2 text-white bg-indigo-700 hover:bg-indigo-800 rounded-md"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-200 rounded mt-2 z-10">
          {options.map((option) => (
            <li key={option.id}>
              <NavLink
                to={option.path}
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-100 hover:text-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                {option.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropDown;