import noteLogo from "../assets/images/note-logo.png";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { verify } from "../actions/auth";


function Activate({verify}){
    const {uid, token} = useParams();

    const [verified, setVerified] = useState(false);

    const handleSubmit =() => {
        verify(uid,token);
        alert("Login with your email and password!");
        setVerified(true);
    };

    if (verified){
        return <Navigate to='/login'/>;
    }
    return (
        <div className="login-form">
            <div className="title">
                <img className="logo" src={noteLogo} alt="" />
                <h1 className="heading-text">Verify Account</h1>
            </div>
            <p className="verify-text">Click the button to verify your account:</p>
            <button onClick={() => handleSubmit()} className="submit-btn">Verify Account</button>
        </div>
    );
}

export default connect(null, {verify})(Activate);