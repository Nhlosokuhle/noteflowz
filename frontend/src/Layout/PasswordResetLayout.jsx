import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function PasswordResetLayout(){
    return (
        <div className="containerx">
            <Outlet/>
            <Footer/>
        </div>
    ); 
}

export default PasswordResetLayout;