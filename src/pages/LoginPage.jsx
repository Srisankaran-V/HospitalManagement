import { useState, useContext } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(credentials);
    try {
      console.log(credentials);
      const res = await axios.post('http://localhost:8080/api/v1/auth/login', credentials);
      const token = res.data.token;
      console.log('before :', token);
      login(token); // Save token and user in context
      console.log('after:',token);

      navigate('/'); // Redirect to home page 
    } catch (error) {
      
      console.log('Login error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Invalid login credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <input
          type="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          required
        />
        <input
          type="password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className={`w-full p-3 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <Link to="/register" className="block text-center text-indigo-600 hover:underline mt-4">
          Create new account
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
