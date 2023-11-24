function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Created by Nhlosokuhle. © {currentYear}</p>
        </footer>
    );
}

export default Footer;