import React, { Component } from 'react';

import '../css/login.css';

class Login extends Component {
    render () {
        return (
            <div className="main-content container">
                <form className="login-form" action="" method="POST" autoComplete="on">
                    <div className="row">
                        <label className="column-6" htmlFor="email">Email:</label>
                        <input className="column-6" type="text" id="email" name="email" />
                    </div>
                    <div className="row">
                        <label className="column-6" htmlFor="password">Password:</label>
                        <input className="column-6" type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;