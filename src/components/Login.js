import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../App.css';

const Login = () => {
  // State to hold email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hook to programmatically navigate
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the credentials match any user in the array
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert("Login successful!");
      navigate('/account'); // Redirect to account page on successful login
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="background">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 custom-form-container">
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="text-center mb-4">
                  <img src={logo} alt="Company Logo" className="logo-img" />
                </div>
                <h3 className="text-center mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                <div className="text-center mt-3">
                  <p>Don't have an account? <Link to="/register">Register Now</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
