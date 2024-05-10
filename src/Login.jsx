import React, { useState } from 'react';
import './Style/LoginForm.css'; 

export  function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log("Email:", email);
        console.log("Password:", password);
      
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-form">
            <h2>Sign In</h2>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Sign In</button>
        </div>
    );
}


