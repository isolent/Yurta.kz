import React, { useState, useMemo } from 'react';
import './LogIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const memoizedSignIn = useMemo(
        () =>
            async () => {
                try {
                    const authResult = await signInWithEmailAndPassword(auth, email, password);
                    if (authResult) {
                        navigate('/');
                    }
                } catch (error) {
                    setError(error.message);
                }
            },
        [email, password, navigate]
    );

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        name === 'email' ? setUsername(value) : setPassword(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        memoizedSignIn();
    };

    return (
        <div className="grid">
            <form className="form login" onSubmit={handleSubmit}>
                <div className="form__field">
                    <h2>Yurta</h2>
                    <label htmlFor="login__email">
                        <span className="hidden">Email</span>
                    </label>
                    <input
                        id="login__email"
                        type="text"
                        name="email"
                        className="form__input"
                        placeholder="Username"
                        required
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="login__password">
                        <span className="hidden">Password</span>
                    </label>
                    <input
                        id="login__password"
                        type="password"
                        name="password"
                        className="form__input"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <input type="submit" value="Sign In" className="loginButton" />
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default LogIn;






