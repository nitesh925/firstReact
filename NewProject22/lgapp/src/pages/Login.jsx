import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "../styles/Login.css"; // Ensure you import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // If user is already logged in, redirect to home
        if (auth.currentUser) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in successfully!");
            navigate('/'); // Redirect to home after successful login
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                // If user not found, redirect to register page
                alert("User not found! Redirecting to register page.");
                navigate('/register'); // Change this path to your register route
            } else {
                alert(error.message);
            }
        }
    };

    const handleRegister = () => {
        navigate('/register'); // Redirect to register page
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <div className='register-cont'>
            <h4>New User ? </h4>
            <button className="register-button" onClick={handleRegister}>
                Register
            </button>
            </div>
        </div>
    );
};

export default Login;
