import { useState } from 'react';
// import axiosInstance from '../utils/axiosInstance'; // Ensure you use the configured Axios instance
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegisterPage = () => {
  // Separate state for each input field
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');

  const [error, setError] = useState(null); // State to track errors
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // Create the user data object from individual states
    const userData = {
      firstname,
      lastname,
      email,
      password,
      role,
    };

    try {
      console.log("response before post",JSON.stringify(userData));
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', JSON.stringify(userData),{
        headers:{
          'Content-Type':'application/json'
        }
      });
  
      console.log("response after post",response.data);

      if (response.status === 201 || response.status === 200) {
        alert('Registration successful');
         // Redirect to the login page
      }
      navigate('/login');
    } catch (err) {
      console.log("error caught", err);

      // Handle specific backend error responses
      if (err.response?.data?.message) {
        setError(err.response.data.message); // Display backend error message
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register
        </h2>

        {/* Display error message */}
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {error}
          </div>
        )}

        {/* Input Fields */}
        <input
          type="text"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <input
          type="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          
          <option value="USER">USER</option>
          <option value="DOCTOR">DOCTOR</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full p-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
