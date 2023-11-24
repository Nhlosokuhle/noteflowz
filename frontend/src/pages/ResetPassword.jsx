import noteLogo from "../assets/images/note-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { reset_password } from "../actions/auth";

function ResetPassword({reset_password}){
    const navigate = useNavigate();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({email: ""});
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    };
    const handleSubmit = () => {
        reset_password(formData.email);
        setRequestSent(true);
    };
    if (requestSent){
        alert("Check your email address!");
        navigate('/login');
    }
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="title">
                <img className="logo" src={noteLogo} alt="" />
                <h1 className="heading-text">Reset Password</h1>
            </div>
            <input className="form-input" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email..." required/>
            <button className="submit-btn">Reset Password</button>
            <p className="auth-text">Return to the login page <NavLink className="link" to="/login">Click here...</NavLink></p>
        </form>
    );
}

export default connect(null, {reset_password})(ResetPassword);