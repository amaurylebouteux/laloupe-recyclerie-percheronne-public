import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer_div mob-12 tab-12 dsk-12">
            <a className="mob-3 tab-3 dsk-3 facebook_logo" href="https://www.facebook.com/recyclerie.percheronne">
                <img className="mob-4 tab-4 dsk-2 row" src="http://www.cpas.grez-doiceau.be/epn/images/logo-facebook.png/@@images/e089d70f-51fe-4bc3-9fb4-50af5d51ef69.png" alt="Facebook" />
            </a>
            <div className="mob-9 tab-9 dsk-9 footer_right row">
                <div className="mob-12 tab-12 dsk-8 legals">
                    <Link to='/mentions'><a className="mob-12 tab-12 dsk-4 legals" href="/" alt="Mentions légales">
                        Mentions Légales
                    </a></Link>
                </div>
{/*                 <Link to='/admin'><a className="mob-12 tab-12 dsk-4 admin" href="/" alt="Admin">Admin</a></Link>
 */}            </div>
        </footer>
    );
}

export default Footer;