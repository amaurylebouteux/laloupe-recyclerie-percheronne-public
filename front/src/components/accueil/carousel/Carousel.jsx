import React from 'react';
import "./Carousel.css";

function Carousel() {
    return (
        <div>
            <div className="mob-12 tab-11 slider">
                <p>La Recyclerie Percheronne</p>
                <div className="slides">
                    <img src="https://image.noelshack.com/fichiers/2019/51/2/1576579142-ressourcerie-petite-rockette-dsc0069-web.jpg" alt="" />
                    <img src="https://image.noelshack.com/fichiers/2019/51/2/1576579143-cropped-gopr1718.jpg" alt="" />
                    <img src="https://image.noelshack.com/fichiers/2019/51/2/1576579142-ftv4525-00-00-16-21-3218461.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Carousel;