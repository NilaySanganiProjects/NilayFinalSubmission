import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Account = () => {
  // State to hold user data
  const [user, setUser] = useState({ email: '', password: '' });
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Fetch user data from local storage when the component mounts
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Assume that the user is logged in and we fetch their data based on the email stored in localStorage
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const storedUser = storedUsers.find(user => user.email === currentUserEmail);
    
    console.log('Stored user:', storedUser); // Debugging line

    if (storedUser) {
      setUser(storedUser);
      setNewEmail(storedUser.email);
    }
  }, []);

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newEmail') {
      setNewEmail(value);
    } else if (name === 'newPassword') {
      setNewPassword(value);
    }
  };

  // Update user data in local storage
  const handleUpdate = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = storedUsers.map(user =>
      user.email === user.email ? { ...user, email: newEmail, password: newPassword } : user
    );

    // Save updated user list to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Account updated successfully!');
  };

  // Navigate back to the login page
  const handleBackToLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="background"> 
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="text-center mb-4">
                  <img src={logo} alt="Company Logo" className="img-fluid logo-img" />
                </div>
                <h3 className="text-center mb-4">Account Management</h3>
                <form>
                  <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-4 col-form-label">Current Email:</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        value={user.email}
                        onChange={(e) => setUser(prevState => ({ ...prevState, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="newEmail" className="col-sm-4 col-form-label">New Email:</label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        id="newEmail"
                        name="newEmail"
                        className="form-control"
                        value={newEmail}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="newPassword" className="col-sm-4 col-form-label">New Password:</label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        className="form-control"
                        value={newPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 offset-sm-4">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm rounded-pill me-2"
                        onClick={handleUpdate}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm rounded-pill"
                        onClick={handleBackToLogin}
                      >
                        Back to Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
