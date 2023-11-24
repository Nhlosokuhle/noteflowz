import noteLogo from "../assets/images/note-logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

function Header({logout, isAuthenticated}){
    return (
        <header>
           <img src={noteLogo} alt="" />
           <NavLink onClick={() => logout()} className="link" to="/">Sign out</NavLink>
        </header>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Header);