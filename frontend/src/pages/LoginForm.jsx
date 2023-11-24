import noteLogo from "../assets/images/note-logo.png";
import { NavLink, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { login } from "../actions/auth";


function LoginForm({login, isAuthenticated}){
    const [formData, setFormData] = useState({email: "", password: ""});
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    }; 
    const handleSubmit =() => {
        login(formData.email, formData.password);
        setFormData({email: "", password: ""})
    };
    if (isAuthenticated){
        return <Navigate to='/notes'/>;
    }
    return (
        <div className="login-form">
            <div className="title">
                <img className="logo" src={noteLogo} alt="" />
                <h1 className="heading-text">Sign in</h1>
            </div>
            <input className="form-input" required name="email" value={formData.email} onChange={handleChange} type="text" placeholder="Email..."/>
            <input className="form-input" name="password" value={formData.password} onChange={handleChange} minLength={6} required type="password" placeholder="Password..."/>
            <button onClick={() => handleSubmit()} className="submit-btn">Sign in</button>
            <p className="auth-text">Need an account? <NavLink className="link" to="/">Click here...</NavLink></p>
            <p className="auth-text">Forgot your password? <NavLink className="link" to="/reset_password">Click here...</NavLink></p>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(LoginForm);