import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NoteLayout(){
    return (
        <div className="note-container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default NoteLayout;