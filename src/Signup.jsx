import React, { useState } from 'react';
import './Style/SignupForm.css'; 

export function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
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
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
    );
}


