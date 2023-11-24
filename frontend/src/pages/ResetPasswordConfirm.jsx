import noteLogo from "../assets/images/note-logo.png";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { reset_password_confirm } from "../actions/auth";

function ResetPasswordConfirm({reset_password_confirm}){
    const { uid, token } = useParams();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({new_password: "", re_new_password: ""});
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => {currentData[changedField] = newValue; return {...currentData}});
    };
    const handleSubmit = () => {
        reset_password_confirm(uid, token, formData.new_password, formData.re_new_password);
        setRequestSent(true);
    };
    
    if (requestSent){
        return <Navigate to= '/login'/>
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="title">
                <img className="logo" src={noteLogo} alt="" />
                <h1 className="heading-text">Reset Password</h1>
            </div>
            <input className="form-input" name="new_password" type="text" minLength='6' value={formData.new_password} onChange={handleChange} required placeholder="New Password..."/>
            <input className="form-input" name="re_new_password" type="text" minLength='6' value={formData.re_new_password} onChange={handleChange} required placeholder="Confirm Password..."/>
            <button className="submit-btn">Reset Password</button>
            <p className="auth-text">Return to the login page <NavLink className="link" to="/login">Click here...</NavLink></p>
        </form>
    );
}

export default connect(null, {reset_password_confirm})(ResetPasswordConfirm);