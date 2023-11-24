import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";

function AuthLayout(props){
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    }, []);
    return (
        <div className="containerx">
            <Outlet/>
            <Footer/>
        </div>
    ); 
}

export default connect(null, {checkAuthenticated, load_user})(AuthLayout);