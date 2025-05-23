import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./AboutUs.css";
import heroImg from "./img/heroImg.png";
import visionImg from "./img/vision.jpg";
import missionImg from "./img/mission.jpg";
import chairmanIcon from "./img/chairman-icon.png";

const AboutUs = () => {
  // Animation controls for all sections
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [leadershipRef, leadershipInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [storyRef, storyInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [visionRef, visionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [missionRef, missionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const heroControls = useAnimation();
  const leadershipControls = useAnimation();
  const storyControls = useAnimation();
  const visionControls = useAnimation();
  const missionControls = useAnimation();

  // Hero animation trigger
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
  }, [heroControls, heroInView]);

  // Leadership animation trigger
  useEffect(() => {
    if (leadershipInView) {
      leadershipControls.start("visible");
    }
  }, [leadershipControls, leadershipInView]);

  // Story animation trigger
  useEffect(() => {
    if (storyInView) {
      storyControls.start("visible");
    }
  }, [storyControls, storyInView]);

  // Vision animation trigger
  useEffect(() => {
    if (visionInView) {
      visionControls.start("visible");
    }
  }, [visionControls, visionInView]);

  // Mission animation trigger
  useEffect(() => {
    if (missionInView) {
      missionControls.start("visible");
    }
  }, [missionControls, missionInView]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const leftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="aboutPage-us-page">
      {/* ========== Top Hero Section ========== */}
      <motion.section
        className="aboutPage-hero-section"
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
      >
        <div className="aboutPage-hero-container">
          <motion.div className="aboutPage-hero-content" variants={leftToRight}>
            <motion.h1 variants={staggerItem}>
              <span className="highlight">
                PARAMOUNT WHOLESALER, EXPORTER & PROVIDER
              </span>
            </motion.h1>
            <motion.div className="divider" variants={staggerItem} />
            <motion.p variants={staggerItem}>
              Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc. These products are acquired from the best and world-class vendors of the market. Known for weather resistance and Coarse textured, these are used in much wooden application ns like boats making, furniture making etc. They are termite proof and very sleek in design. Our products are checked and tartan against many parameters by quality controllers to confirm global standards. These wooden products are available in many specifications and stipulations as per the details laid by the patrons. Smooth finish, sturdy design, cost-effective rates and durability are few of the many factors that make these products highly appreciated among our customers.
            </motion.p>
          </motion.div>
          <motion.div className="aboutPage-hero-image" variants={rightToLeft}>
            <motion.img
              src={heroImg}
              alt="AIDF GROUP Products"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ========== Leadership Section ========== */}
      <motion.section
        id="chairman-section"
        className="leadership-section"
        ref={leadershipRef}
        initial="hidden"
        animate={leadershipControls}
        variants={fadeIn}
      >
        <motion.div className="section-header" variants={scaleUp}>
          <h2>Leadership</h2>
          <div className="section-divider"></div>
        </motion.div>
        <motion.div className="leader-container" variants={staggerContainer}>
          <motion.div className="leader-card">
            <div className="leader-icon">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-6.5a6.001 6.001 0 00-9.888 0H2.751a.75.75 0 100 1.5h4.305a6.001 6.001 0 009.888 0h4.305a.75.75 0 100-1.5h-4.305z" />
              </svg> */}
              <span>
                <img src={chairmanIcon} alt="chairman" width={"50px"} />{" "}
              </span>
            </div>
            <div className="leader-info">
              <h3>Chairman</h3>
              <div className="leader-bio">
                <p>
                  Under the visionary leadership of Mr. Sanjeev Kumar Jha, Annapurna Interiors Decorators & Furnitures has evolved into a trusted industry leader, blending decades of expertise with modern innovation. His unwavering commitment to quality, customer satisfaction, and strategic growth has established Annapurna as a respected brand recognized for reliability and excellence both in India and globally.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="leader-card">
            <div className="leader-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 11a5 5 0 015 5v6h-2v-6a3 3 0 00-2.824-2.995L12 13a3 3 0 00-2.995 2.824L9 16v6H7v-6a5 5 0 015-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 00-.301 1.575L6 16v.086a1.492 1.492 0 00-.356-.08L5.5 16a1.5 1.5 0 00-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 015.5 14zm13 0a3.5 3.5 0 013.5 3.5V22h-2v-4.5a1.5 1.5 0 00-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.26-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm13 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13 2a.5.5 0 100 1 .5.5 0 000-1zm13 0a.5.5 0 100 1 .5.5 0 000-1zM12 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <div className="leader-info">
              <h3>Managing Director</h3>
              <div className="leader-bio">
                <p>
                  The Managing Director of Annapurna Interiors Decorators & Furnitures is instrumental in driving the company’s growth by championing innovation, prioritizing customer needs, and embracing sustainable practices. Their dynamic leadership fosters continuous improvement, exceptional service, and the delivery of high-quality products designed to meet the diverse demands of global markets.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== Our Story Section ========== */}
      <motion.section
        id="ourstory"
        className="our-story-section"
        ref={storyRef}
        initial="hidden"
        animate={storyControls}
        variants={fadeIn}
      >
        <motion.div className="section-header" variants={scaleUp}>
          <h2>
            <span className="highlight">OUR</span> STORY
          </h2>
          <div className="section-divider"></div>
        </motion.div>
        <motion.div className="story-container" variants={staggerContainer}>
          <motion.div className="story-content">
            <motion.div className="story-left" variants={leftToRight}>
              <motion.p variants={staggerItem}>
                Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc. 
              </motion.p>
              <motion.p variants={staggerItem}>
               Our vendors work very hard round the clock to keep the quality and prices at the high level. We have appointed professionals to conduct market research to choose our vendors on the ground of their market credibility, financial stability, delivery process and cost-effective rates. We have a very cordial and fruitful relationship with our vendors that help us to offer the world Seaworld-class products to our customers. 
              </motion.p>
              <motion.p className="signature" variants={staggerItem}>
               Annapurna Interiors Decorators & Furnitures
              </motion.p>
            </motion.div>
            <motion.div className="story-right" variants={rightToLeft}>
              <motion.div
                className="story-features"
                variants={staggerContainer}
              >
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Sourced from world-class vendors</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Exceptional weather resistance</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Termite-proof materials</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Rigorous quality control</span>
                </motion.div>
                <motion.div className="feature-item" variants={staggerItem}>
                  <div className="feature-icon">✓</div>
                  <span>Customization options</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== Vision Section ========== */}
      <motion.section
        id="vision"
        className="vision-section"
        ref={visionRef}
        initial="hidden"
        animate={visionControls}
        variants={fadeIn}
      >
        <motion.div className="vision-container" variants={staggerContainer}>
          <motion.div
            className="vision-image"
            variants={leftToRight}
            whileHover={{ scale: 1.03 }}
          >
            <img src={visionImg} alt="Our Vision" />
          </motion.div>
          <motion.div
            className="vision-content"
            variants={rightToLeft}
            transition={{ delay: 0.3 }}
          >
            <motion.div className="vision-header" variants={staggerItem}>
              <motion.span className="vision-label" variants={staggerItem}>
                Our Vision
              </motion.span>
              <motion.h3 variants={staggerItem}>
                Crafting Timeless Excellence
              </motion.h3>
              <motion.div className="vision-divider" variants={staggerItem} />
            </motion.div>
            <motion.p variants={staggerItem}>
              To become the most respected global brand in interior and wooden
              solutions, known for innovation, quality, and commitment to
              customer satisfaction. We envision reaching new heights through
              craftsmanship, integrity, and a passion for creating extraordinary
              spaces.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ========== Mission Section ========== */}
      <motion.section
        id="mission"
        className="mission-section"
        ref={missionRef}
        initial="hidden"
        animate={missionControls}
        variants={fadeIn}
      >
        <motion.div className="mission-container" variants={staggerContainer}>
          <motion.div className="mission-content" variants={leftToRight}>
            <motion.div className="mission-header" variants={staggerItem}>
              <motion.span className="mission-label" variants={staggerItem}>
                Our Mission
              </motion.span>
              <motion.h3 variants={staggerItem}>Driven by Quality</motion.h3>
              <motion.div className="mission-divider" variants={staggerItem} />
            </motion.div>
            <motion.p variants={staggerItem}>
              To manufacture and deliver premium, durable, and customizable
              flooring and wooden products that exceed client expectations while
              promoting ethical sourcing, environmental sustainability, and
              continual innovation in the global market.
            </motion.p>
          </motion.div>
          <motion.div
            className="mission-image"
            variants={rightToLeft}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={missionImg} alt="Our Mission" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
