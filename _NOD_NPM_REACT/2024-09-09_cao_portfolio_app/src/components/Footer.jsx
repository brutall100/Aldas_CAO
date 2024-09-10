import '../css/Footer.css'; 

const Footer = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <footer>
            <p>This is the footer. Today's date is {currentDate}.</p>
        </footer>
    );
};

export default Footer;
