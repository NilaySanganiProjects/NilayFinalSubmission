import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../App.css';

const Register = () => {
  // State to hold form input data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  // State to control password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle changes in input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  // Toggle visibility of password
  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email is already registered
    if (existingUsers.some(user => user.email === formData.email)) {
      alert("Email is already registered!");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add new user to the list
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    // Save updated users list to local storage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert("Registration successful! You can now log in.");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div className="background"> 
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 custom-form-container"> 
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="text-center mb-4">
                  <img src={logo} alt="Company Logo" className="img-fluid logo-img" />
                </div>
                <h3 className="text-center mb-4">Create an Account</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="firstName"
                      className="form-control"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        id="showPassword"
                        className="form-check-input me-2"
                        checked={showPassword}
                        onChange={handleShowPasswordToggle}
                      />
                      <label htmlFor="showPassword" className="form-check-label">Show Password</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Register</button>
                </form>
                <div className="text-center mt-3">
                  <p>Already have an account? <a href="/login">Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
