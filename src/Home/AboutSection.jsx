import React from "react";
import "./AboutSection.css";
import aboutImage from "./HomeImg/74a98132f857ba3e9914942eb25f0ad8.jpg";
import Logo from "./HomeImg/companyLogo.jpg";
import icon1 from "./HomeImg/handshake.png";
import icon2 from "./HomeImg/registration (1).png";
import icon3 from "./HomeImg/exchange.png";
import icon4 from "./HomeImg/registration.png";
import icon5 from "./HomeImg/teamwork.png";
import icon6 from "./HomeImg/balance.png";
import icon7 from "./HomeImg/import.png";
import icon8 from "./HomeImg/trust seal.png";

const features = [
  {
    icon: icon1,
    title: "Nature of Business",
    description: "Trader - Wholesaler/Distributor",
  },
  {
    icon: icon2,
    title: "GST Registration Date",
    description: "01-07-2017",
  },
  {
    icon: icon3,
    title: "Annual Turnover",
    description: "1.5 - 5 Cr",
  },
  {
    icon: icon4,
    title: "GST No.",
    description: "07AHZPJ2789F1ZN",
  },
  {
    icon: icon5,
    title: "Total Number of Employees",
    description: "Upto 10 People",
  },
  {
    icon: icon6,
    title: "Legal Status of Firm",
    description: "Proprietorship",
  },
  {
    icon: icon7,
    title: "Import Export Code (IEC)",
    description: "AHZPJ*****",
  },
  {
    icon: icon8,
    title: "Trustseal Verified",
    description: "",
  },
];

const AIDFAboutSection = () => {
  return (
    <section className="aidf-about-section">
  <div className="aidf-about-container">
    
    <div className="aidf-about-left">
      <h4 style={{fontSize:"25px",fontWeight:"550" }}>Welcome To</h4>
      <h2>Annapurna Interiors Decorators & Furnitures</h2>
      <p>
        We, Annapurna Interiors Decorators & Furnitures are most trusted and appreciated
        Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate
        Flooring, Vinyl Flooring etc.
      </p>
      <a href="/about-us" className="aidf-contact-button">
       About Us
      </a>
    </div>

    <div className="aidf-about-right">
      {features.map((feature, index) => (
        <div className="aidf-feature-card" key={index}>
          <div className="aidf-icon-wrapper">
            <img src={feature.icon} alt={feature.title} />
          </div>
          <div className="aidf-feature-text">
            <h4>{feature.title}</h4>
            {feature.description && <p>{feature.description}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default AIDFAboutSection;
