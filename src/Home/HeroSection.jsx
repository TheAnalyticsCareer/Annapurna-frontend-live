// import React, { useState, useEffect } from "react";
// import "./HeroSection.css";
 
// // import image2 from "./SlideImg/2img.webp";
// // import image3 from "./SlideImg/3img.jpg";
// import card1 from "./HomeImg/stick-on-skirting.jpg";
// import card2 from "./HomeImg/carpet.jpg";
// import card3 from "./HomeImg/flooring.jpg";
// import card4 from "./HomeImg/aluminum-slim-glass-partition-1000x1000.webp";
// import card5 from "./HomeImg/grass3.jpg";
// import years from "./HomeImg/15+excellence.png";
// import trust from "./HomeImg/trust.png";

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
//     {
//       src: image1,
//       caption: {
//         title: "Premium Flooring Solutions",
//         description: "Discover our high-quality flooring products",
//         buttonText: "View Products",
//       },
//     },
//     {
//       src: image2,
//       caption: {
//         title: "Modern Designs",
//         description: "Latest trends in home and commercial flooring",
//       },
//     },
//     {
//       src: image3,
//       caption: {
//         title: "Expert Installation",
//         description: "Professional installation services available",
//         buttonText: "Get a Quote",
//       },
//     },
//   ];

//   const productCards = [
//     {
//       id: 1,
//       title: "Skirting & Profile",
//       image: card1,
//       link: "/aluminum-profile-skirtings"
//     },
//     {
//       id: 2,
//       title: "Carpets",
//       image: card2,
//       link: "/carpets"
//     },
//     {
//       id: 3,
//       title: "Flooring",
//       image: card3,
//       link: "/flooring"
//     },
//     {
//       id: 4,
//       title: "Aluminium Glass Partition",
//       image: card4,
//       link: "/aluminium-glass-partitions"
//     },
//     {
//       id: 5,
//       title: "More Products",
//       image: card5,
//       link: "/More"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <section className="hs-container">
//       <div className="hs-slideshow-container">
//         <div
//           className="hs-slides-wrapper"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="hs-slide"
//               style={{ backgroundImage: `url(${slide.src})` }}
//               aria-hidden={index !== currentIndex}
//             />
//           ))}
//         </div>

//         <button
//           className="hs-nav-arrow hs-prev-arrow"
//           onClick={goToPrev}
//           aria-label="Previous slide"
//         >
//           &#10094;
//         </button>
//         <button
//           className="hs-nav-arrow hs-next-arrow"
//           onClick={goToNext}
//           aria-label="Next slide"
//         >
//           &#10095;
//         </button>
//       </div>

//       <div className="hs-product-cards-container">
//         {productCards.map((card) => (
//           <a href={card.link} key={card.id} className="hs-product-card">
//             <div className="hs-card-circle-container">
//               <div className="hs-card-image-wrapper">
//                 <img 
//                   src={card.image} 
//                   alt={card.title} 
//                   className="hs-card-circle-image" 
//                 />
//                 <div className="hs-circle-overlay"></div>
//               </div>
//               <h3 className="hs-card-title">{card.title}</h3>
//             </div>
//           </a>
//         ))}
//       </div>

//       <div className="hs-badge hs-badge-left">
//         <img src={trust} alt="Trust Seal IndiaMART" className="hs-badge-image" />
//       </div>
//       <div className="hs-badge hs-badge-right">
//         <img src={years} alt="15+ Years of Excellence" className="hs-badge-image" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





import video from "./SlideImg/backvid.mp4";
import React, { useState, useEffect } from "react";
import "./HeroSection.css";

import card1 from "./HomeImg/stick-on-skirting.jpg";
import card2 from "./HomeImg/carpet.jpg";
import card3 from "./HomeImg/flooring.jpg";
import card4 from "./HomeImg/aluminum-slim-glass-partition-1000x1000.webp";
import card5 from "./HomeImg/grass3.jpg";
import years from "./HomeImg/15+excellence.png";
import trust from "./HomeImg/trust.png";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    
  ];

  const productCards = [
    {
      id: 1,
      title: "Aluminum Profile and Skirtings",
      image: card1,
      link: "/aluminum-profile-skirtings",
    },
    {
      id: 2,
      title: "Carpets",
      image: card2,
      link: "/carpets",
    },
    {
      id: 3,
      title: "Flooring",
      image: card3,
      link: "/flooring",
    },
    {
      id: 4,
      title: "Aluminium Glass Partition",
      image: card4,
      link: "/aluminium-glass-partitions",
    },
    {
      id: 5,
      title: "More Products",
      image: card5,
      link: "/More",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="hs-container">
      <div className="hs-slideshow-container">
        {/* 🔥 Video Background */}
        <video
          className="hs-background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src= {video}
          />
          Your browser does not support the video tag.
        </video>

      

       
      </div>

      <div className="hs-product-cards-container">
        {productCards.map((card) => (
          <a href={card.link} key={card.id} className="hs-product-card">
            <div className="hs-card-circle-container">
              <div className="hs-card-image-wrapper">
                <img
                  src={card.image}
                  alt={card.title}
                  className="hs-card-circle-image"
                />
                <div className="hs-circle-overlay"></div>
              </div>
              <h3 className="hs-card-title">{card.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="hs-badge hs-badge-left">
        <img src={trust} alt="Trust Seal IndiaMART" className="hs-badge-image" />
      </div>
      <div className="hs-badge hs-badge-right">
        <img src={years} alt="15+ Years of Excellence" className="hs-badge-image" />
      </div>
    </section>
  );
};

export default HeroSection;
