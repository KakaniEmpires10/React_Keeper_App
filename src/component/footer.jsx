import React from 'react';
const currentYear = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Copyright by Alim in {currentYear}</p>
    </footer>
}

export default Footer;