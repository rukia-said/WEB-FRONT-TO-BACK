import React from 'react';
import '../Login.css';
import suzaLogo from '../assets/suza.png';

function Login() {
    return (
        <>

            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">SH <span className='centre'>Centre +</span></h3>

                        <img src={suzaLogo} className="rounded mx-auto d-block" />



                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Login