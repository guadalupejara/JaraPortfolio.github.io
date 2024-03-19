import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import scarySprite from "../../Assests/sprite1.png";
import developerSprite from "../../Assests/sprite.png";
import researchSprite from "../../Assests/sprite2.png";

function MovingSprites() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 3); 
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                    <img src={developerSprite} className="d-block w-100" alt="Scary Sprite" />
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <img src={scarySprite} className="d-block w-100" alt="Developer Sprite" />
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                    <img src={researchSprite} className="d-block w-100" alt="Research Sprite" />
                </div>
            </div>
        </div>
    );
}

export default MovingSprites;
