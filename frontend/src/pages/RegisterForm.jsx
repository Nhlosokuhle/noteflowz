import noteLogo from "../assets/images/note-logo.png";
import { NavLink, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import { useState } from "react";

function RegisterForm({signup, isAuthenticated}){
    const [formData, setFormData] = useState({name: "", email: "", password: "",  re_password: ""});
    const [accountCreated, setAccountCreate] = useState(false);
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    };
    const handleSubmit = () => {
        if (formData.password === formData.re_password){
            signup(formData.name, formData.email, formData.password, formData.re_password);
            alert("Check your email to verify your account!");
            setAccountCreate(true);
        }
    }
    if (isAuthenticated){
        return <Navigate to='/login'/>
    }

    if (accountCreated){
        return <Navigate to='/login'/>
    }
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="title">
                <img className="logo" src={noteLogo} alt="" />
                <h1 className="heading-text">Sign up</h1>
            </div>
            <input className="form-input" name="email"value={formData.email} onChange={handleChange} type="text" placeholder="Email..." required/>
            <input className="form-input" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full name..." required/>
            <input className="form-input" name="password" value={formData.password} onChange={handleChange} type="text" placeholder="Password..." required/>
            <input className="form-input" name="re_password" value={formData.re_password} onChange={handleChange} type="text" placeholder="Confirmation password..." required/>
            <button className="submit-btn">Sign up</button>
            <p className="auth-text">Already have an account? <NavLink className="link" to="/login">Click here...</NavLink></p>
        </form>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, {signup})(RegisterForm);