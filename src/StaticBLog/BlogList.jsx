import React from 'react';
// import { Link } from 'react-router-dom';
import './BlogStyles.css';
import { useNavigate } from 'react-router-dom';
import id1 from "./blogimg/How-to-choose-the-perfect-flooring.webp";
import id2 from "./blogimg/Flor-carpet-tiles.jpg";
import id3 from "./blogimg/aluminium-blog.jpg";

const BlogList = () => {

    const navigate=useNavigate()



  const blogs = [
    {
      id: 1,
      title: "How to Choose the Right Flooring for Every Room",
      excerpt: "A complete guide to selecting the ideal flooring based on lifestyle, durability, and space functionality.",
      date: "May 15, 2023",
      category: "Flooring Tips",
      image: id1
    },
    {
      id: 2,
      title: "Sustainable Carpet Solutions: Comfort, Style, and Responsibility Underfoot",
      excerpt: "Explore how Annapurna Interiors Decorators & Furnitures eco-conscious carpet tiles combine luxury, performance, and environmental responsibility in modern",
      date: "April 28, 2023",
      category: "Sustainability",
      image: id2
    },
    {
      id: 3,
      title: "Aluminum Profiles in Modern Architecture",
      excerpt: "Explore how aluminum profiles are shaping modern interiors with strength, style, and sustainability.",
      date: "April 10, 2023",
      category: "Architecture",
      image: id3
    },
    
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1 className="blog-main-title">Design Insights</h1>
        <p className="blog-subtitle">Expert perspectives on interior design trends and techniques</p>
      </div>
      
      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-card-link">
              <div className="blog-card-image-container">
                <img src={blog.image} alt={blog.title} className="blog-card-image" />
                <div className="blog-card-category">{blog.category}</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-date">{blog.date}</span>
                </div>
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-excerpt">{blog.excerpt}</p>
                <div onClick={()=>navigate(`/blogs/${blog.id}`)} className="blog-card-readmore">Read Article →</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;