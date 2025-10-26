// import React from "react";
// import "../../styles/Home/Slider.css";
// import { useState, useEffect } from "react";


// const Slider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const images = [
//         "/images/slide3.png",
//         "/images/slide1.png",
//         "/images/slide2.png",

//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [images.length]);

//     const handleImageClick = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const slideImage = (
//         <img
//             src={images[currentIndex]}
//             alt={`슬라이드 이미지 ${currentIndex + 1}`}
//             onClick={handleImageClick}
//             style={{ cursor: "pointer" }}
//         />
//     );
    

//     return (
//         <div className="slide-box">
//         <div className="slide">
//             {images[currentIndex] === "/images/slide3.png" ? (
//                 <a
//                     href="https://www.anyang.ac.kr/cms/etcResourceOpen.do?site=$cms$LYQwlgdkA&key=$cms$EwVgtMAEihE4lquKg1gNccDtDgQGsDorAKA7AOmAJwCUuADgCYBmQA"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <img
//                         src={images[currentIndex]}
//                         alt={`슬라이드 이미지 ${currentIndex + 1}`}
//                     />
//                 </a>
//             ) : (
//                 <img
//                     src={images[currentIndex]}
//                     alt={`슬라이드 이미지 ${currentIndex + 1}`}
//                 />
//             )}
//         </div>

//         {/* 인디케이터 (동그라미) */}
//         <div className="indicator">
//             {images.map((_, index) => (
//                 <span
//                     key={index}
//                     className={`dot ${index === currentIndex ? "active" : ""}`}
//                     onClick={() => setCurrentIndex(index)}
//                 ></span>
//             ))}
            
//         </div>
//     </div>
//         );
//     };
// export default Slider;


////////////////////////////////////임시 코드///////////////////////////
import React, { useState, useEffect } from "react";
import "../../styles/Home/Slider.css";

const Slider = () => {
    const [setCurrentIndex] = useState(0);

    // 보여줄 이미지 하나만 남김
    const images = ["/images/slide3.png"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slide-box">
            <div className="slide">
                <a
                    href="https://www.anyang.ac.kr/cms/etcResourceOpen.do?site=$cms$LYQwlgdkA&key=$cms$EwVgtMAEihE4lquKg1gNccDtDgQGsDorAKA7AOmAJwCUuADgCYBmQA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={images[0]}
                        alt="슬라이드 이미지"
                    />
                </a>
            </div>

            {/* 인디케이터 하나만 */}
            <div className="indicator">
                <span className="dot active"></span>
            </div>
        </div>
    );
};

export default Slider;
