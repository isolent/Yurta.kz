import React, { useState, useMemo } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        username: '',
        phoneNumber: '',
        error: null,
    });

    const { email, password, username, phoneNumber, error: errorMsg } = userData; // Rename error variable in destructuring

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const [error, setError] = useState(null); // Rename error state variable

    const memoizedSignUp = useMemo(
      () =>
        async () => {
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user) {
              navigate('/');
            }
          } catch (err) {
            setError(err.message); // Set error state if signup fails
          }
        },
      [email, password, username, phoneNumber, navigate]
    );
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      await memoizedSignUp(); // Await signup function
    };

    return (
        <div className="grid">
            <form className="form login" onSubmit={handleSubmit}>
                <div className="form__field">
                    <h2>Yurta</h2>
                    <label htmlFor="signup__email">
                        <span className="hidden">Email</span>
                    </label>
                    <input
                        id="signup__email"
                        type="text"
                        name="email"
                        className="form__input"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="signup__username">
                        <span className="hidden">Username</span>
                    </label>
                    <input
                        id="signup__username"
                        type="text"
                        name="username"
                        className="form__input"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="signup__phone">
                        <span className="hidden">Phone Number</span>
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        className="form__input"
                        placeholder="Phone Number"
                        required
                        value={phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="signup__password">
                        <span className="hidden">Password</span>
                    </label>
                    <input
                        id="signup__password"
                        type="password"
                        name="password"
                        className="form__input"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <input type="submit" value="Sign Up" className="loginButton" />
                {error && <p>{error}</p>} 
            </form>
        </div>
    );
};

export default SignUp;

