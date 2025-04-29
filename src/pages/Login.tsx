import React, { useState, useEffect } from 'react';
import { useNavigate,Link  } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const dummyUser = {
    email: 'user@example.com',
    password: 'password',
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    if (email === dummyUser.email && password === dummyUser.password) {
      setError('');
      alert('Login successful!');
      localStorage.setItem('user', JSON.stringify(dummyUser));
      navigate('/admin');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
          <div className='grid grid-cols-2 gap-2'>
            <Link
              to="/"
              className="mt-4 inline-block w-full text-center py-2 px-4 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300"
            >
              ← Back
            </Link>
            <button
              type="submit"
              className="mt-4 inline-block w-full text-center py-2 px-4 bg-green-200 text-gray-800 font-medium rounded-md hover:bg-green-400"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
