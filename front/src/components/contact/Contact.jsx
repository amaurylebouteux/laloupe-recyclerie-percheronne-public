import React from 'react';
import './Contact.css';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

function Contact() {
    return (
        <div>
            <Navigation />
            <div className="mob-12 tab-10 tabx-10 dsk-10 coord">
                <div className="mob-12 tab-12 tabx-12 dsk-6 gauche">
                    <p className="mob-12 tab-12 tabx-12 dsk-12 nom">La Recyclerie Percheronne</p>
                    <p className="mob-12 tab-12 tabx-12 dsk-12 infos">3 rue Charles Péguy</p>
                    <p className="mob-12 tab-12 tabx-12 dsk-12 infos">28240 La Loupe</p>
                    <p><a className="mob-12 tab-12 tabx-12 dsk-12 black infos" href="tel:+33626392539">06 26 39 25 39</a></p>
                    <p><a className="mob-12 tab-12 tabx-12 dsk-12 black infos" href="mailto:recyclerie.percheronne@gmail.com">recyclerie.percheronne@gmail.com</a></p>
                </div>
                <div className="mob-12 tab-12 tabx-12 dsk-6 tot_cartes">
                    <iframe className="mob-12 tab-12 tabx-12 dsk-12 pratique" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.2556305714395!2d1.0140925292369816!3d48.47528159870321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3c2028bc9fd95%3A0x861e45aefecfe16f!2s3%20Rue%20Charles%20P%C3%A9guy%2C%2028240%20La%20Loupe!5e0!3m2!1sfr!2sfr!4v1578405179736!5m2!1sfr!2sfr" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
                    <iframe className="mob-12 tab-12 tabx-12 dsk-12 joli" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d681.9198690267973!2d1.0140925292369816!3d48.47528159870321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3c2028bc9fd95%3A0x861e45aefecfe16f!2s3%20Rue%20Charles%20P%C3%A9guy%2C%2028240%20La%20Loupe!5e1!3m2!1sfr!2sfr!4v1578410489463!5m2!1sfr!2sfr" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;