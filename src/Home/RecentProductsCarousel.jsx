import React, { useRef, useEffect } from "react";
import "./RecentProductsCarousel.css";

const images = [
  '/Recentproductsimg/1.jpeg',
  '/Recentproductsimg/2.jpeg',
  '/Recentproductsimg/3.jpeg',
  '/Recentproductsimg/4.jpeg',
  '/Recentproductsimg/5.jpeg',
  '/Recentproductsimg/6.jpeg',
  '/Recentproductsimg/7.jpeg',
  '/Recentproductsimg/8.jpeg',
  '/Recentproductsimg/9.jpeg',
  '/Recentproductsimg/10.jpeg',
  '/Recentproductsimg/11.jpeg',
  '/Recentproductsimg/12.jpeg',
  '/Recentproductsimg/13.jpeg',
  '/Recentproductsimg/14.jpeg',
  '/Recentproductsimg/15.jpeg',
  '/Recentproductsimg/16.jpeg',
  '/Recentproductsimg/17.jpeg',
  '/Recentproductsimg/18.jpeg',
  '/Recentproductsimg/19.jpeg',
  '/Recentproductsimg/20.jpeg',
  '/Recentproductsimg/21.jpg',
  '/Recentproductsimg/22.jpg',
  '/Recentproductsimg/23.jpg',
  '/Recentproductsimg/24.jpg',
  '/Recentproductsimg/25.jpg',
  '/Recentproductsimg/26.jpg',
  '/Recentproductsimg/27.jpg',
  '/Recentproductsimg/28.jpg',
  '/Recentproductsimg/29.jpg',
'/Recentproductsimg/Batra.jpeg',
'/Recentproductsimg/Batra2.jpeg',
];


const RecentProductsCarousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Responsive imagesToShow based on window width
  const [itemWidth, setItemWidth] = React.useState(0);
  const [imagesToShow, setImagesToShow] = React.useState(3);
  const gap = 16; // must match .carousel gap in css
  const duplicateCount = 2; // how many times to duplicate the images for seamless loop

  // Responsive breakpoints
  const getImagesToShow = (width) => {
    if (width >= 1200) return 3;
    if (width >= 900) return 2;
    if (width >= 600) return 1.5;
    return 1;
  };

  useEffect(() => {
    const updateItemWidth = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const width = carousel.offsetWidth || window.innerWidth;
      const show = getImagesToShow(width);
      setImagesToShow(show);
      setItemWidth((width - gap * (show - 1)) / show);
    };
    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
    // eslint-disable-next-line
  }, []);

  // Create a long array for seamless looping (prepend and append one set of images)
  const loopImages = [...images, ...images, ...images]; // triple for seamless loop
  const startIdx = images.length; // start at the first image of the middle set

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !itemWidth) return;
    // Set initial scroll to the first image of the middle set
    carousel.scrollLeft = startIdx * itemWidth;
    startAutoScroll();
    return () => stopAutoScroll();
    // eslint-disable-next-line
  }, [itemWidth]);

  // Infinite scroll effect
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const total = images.length;
    // If at the start of the first set, jump to the same image in the middle set
    if (carousel.scrollLeft < itemWidth * 0.5) {
      carousel.scrollLeft = startIdx * itemWidth + (carousel.scrollLeft % (total * itemWidth));
    }
    // If at the end of the last set, jump to the same image in the middle set
    else if (carousel.scrollLeft >= itemWidth * (total * 2 - 0.5)) {
      carousel.scrollLeft = startIdx * itemWidth + (carousel.scrollLeft % (total * itemWidth));
    }
  };

  // Auto-scroll from right to left
  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      scrollLeft(); // scroll left for right-to-left movement
    }, 2500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Manual scroll functions
  const scrollLeft = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="recent-products-carousel-section">
      <h2 className="recent-heading">Recent Projects</h2>
      <p className="recent-subheading">
        Expert perspectives on interior design trends and techniques
      </p>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft} aria-label="Scroll Left">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path d="M14.5 7L10 12L14.5 17" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          className="carousel"
          ref={carouselRef}
          onScroll={handleScroll}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          style={{
            minWidth: 0,
            overflowX: 'auto',
            display: 'flex',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {loopImages.map((img, idx) => {
            // Find the original image index (for seamless loop arrays)
            const originalIdx = idx % images.length;
            let overlayText = "Aluminium Glass Partitions and Carpets, Noida";
            if (originalIdx >= 20 && originalIdx <= 28) {
              overlayText = "Lux Kolkata";
            }
            // Set overlay for Batra and Batra2
            if (originalIdx === 29 || originalIdx === 30) {
              overlayText = "Batra house, Gurgaon";
            }
            return (
              <div
                className="carousel-img-container"
                key={img + '-' + idx}
                style={{
                  minWidth: window.innerWidth < 600 ? '100%' : itemWidth,
                  maxWidth: window.innerWidth < 600 ? '100%' : itemWidth,
                  height: window.innerWidth < 600 ? 180 : window.innerWidth < 900 ? 200 : 260,
                  transition: 'min-width 0.3s, max-width 0.3s, height 0.3s',
                  scrollSnapAlign: 'center',
                  boxSizing: 'border-box',
                  padding: window.innerWidth < 600 ? 0 : undefined,
                  position: 'relative',
                }}
              >
                <img
                  src={img}
                  alt={`Recent Product ${originalIdx + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 18,
                    display: 'block',
                  }}
                />
                <div className="carousel-img-overlay">
                  {overlayText}
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={scrollRight} aria-label="Scroll Right">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path d="M10 7L14.5 12L10 17" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    
    </div>
  );
};

export default RecentProductsCarousel;
