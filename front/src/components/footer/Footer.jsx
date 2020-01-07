import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer_div mob-12 tab-12 dsk-12">
            <a className="mob-3 tab-3 dsk-3 facebook_logo" href="https://www.facebook.com/recyclerie.percheronne">
                <img className="mob-4 tab-4 dsk-2 row" src="http://www.cpas.grez-doiceau.be/epn/images/logo-facebook.png/@@images/e089d70f-51fe-4bc3-9fb4-50af5d51ef69.png" alt="Facebook" />
            </a>
            <div className="mob-9 tab-9 dsk-9 footer_right row">
                <div className="mob-6 tab-5 dsk-3 visites">
                    <p className="mob-12 tab-12 dsk-8 visites">
                        XXXX Visites
                    </p>
                </div>
                <div className="mob-12 tab-12 dsk-12 legals">
                    <a className="mob-12 tab-12 dsk-4 legals" href="https://www.facebook.com/recyclerie.percheronne" alt="Mentions légales">
                        Mentions Légales
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;