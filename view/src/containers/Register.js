import React, { Component } from 'react';
import '../css/register.css';

class Register extends Component {
    render () {
        return (
            <div className="main-content">
                <form className="register-form" action="" method="POST" autoComplete="on">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input className="" type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input className="" type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input className="" type="password" id="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="password2">Confirm Password:</label>
                        <input className="" type="password" id="confirm-password" name="confirmPassword" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Register;