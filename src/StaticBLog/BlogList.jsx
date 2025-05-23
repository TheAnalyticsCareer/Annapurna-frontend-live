import React from 'react';
// import { Link } from 'react-router-dom';
import './BlogStyles.css';
import { useNavigate } from 'react-router-dom';
import id1 from "../Home/HomeImg/How-to-choose-the-perfect-flooring.webp";
import id2 from "../Home/HomeImg/aluminium-blog.jpg";
import id3 from "../Home/HomeImg/Flor-carpet-tiles.jpg";







const BlogList = () => {

    const navigate=useNavigate()



  const blogs = [
    {
      id: 1,
      title: "The Future of Interior Design in 2023",
      excerpt: "A complete guide to selecting the ideal flooring based on lifestyle, durability, and space functionality.",
      date: "May 15, 2023",
      category: "Design Trends",
      image: id1
    },
    {
      id: 2,
      title: "Sustainable Carpet Solutions: Comfort, Style, and Responsibility Underfoot",
      excerpt: "Explore how AIDF's eco-conscious carpet tiles combine luxury, performance, and environmental responsibility in modern interiors.",
      date: "April 28, 2023",
      category: "Sustainability",
      image: id3
    },
    {
      id: 3,
      title: "Aluminum Profiles in Modern Architecture",
      excerpt: "Explore how aluminum profiles are shaping modern interiors with strength, style, and sustainability.",
      date: "April 10, 2023",
      category: "Space Planning",
      image: id2
    },
    {
      id: 4,
      title: "Acoustic Solutions for Modern Workspaces",
      excerpt: "open-plan offices and collaborative workspaces, uncontrolled noise has become one of the biggest threats to employee productivity and well-being. ",
      date: "March 22, 2023",
      category: "Color Theory",
      image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Smart Glass Technology in Contemporary Architecture",
      excerpt: "Smart glass, or switchable glass, represents one of the most transformative technologies in modern architecture. This innovative material can change its light transmission properties on demand, transitioning from transparent to opaque with the flip of a switch or automated environmental triggers. ",
      date: "March 15, 2023",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Biophilic Design: Bringing Nature into Urban Spaces",
      excerpt: "This design philosophy goes beyond simply adding plants to interiors - it represents a fundamental rethinking of how buildings can satisfy our innate need to connect with nature. Research demonstrates that well-executed biophilic design can reduce stress, enhance creativity, and improve cognitive function by 8-15%.",
      date: "February 28, 2023",
      category: "Design Techniques",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
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