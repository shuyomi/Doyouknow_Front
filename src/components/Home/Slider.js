import React from "react";
import "../../styles/Home/Slider.css";
import { useState, useEffect } from "react";

// 슬라이드는 임시로 만든거라서 크롤링 하면 어떻게 할지 수정필요

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/images/slide1.png", // public/images/slide1.png
        "/images/slide2.png", // public/images/image2.jpg
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slide">
            <img src={images[currentIndex]} alt="슬라이드 이미지" />
        </div>
    );
};

export default Slider;
