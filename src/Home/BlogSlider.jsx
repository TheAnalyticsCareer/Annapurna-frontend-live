import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogSlider.css";




const BlogSlider = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "How to Choose the Right Flooring for Every Room",
      excerpt:
        "A complete guide to selecting the ideal flooring based on lifestyle, durability, and space functionality.",
      date: "May 7, 2025",
      category: "Flooring Tips",
      image: "https://th.bing.com/th/id/OIP.agmtbmWxeXeoHct3X6VT6wHaEM?cb=iwc2&rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      title:
        "Sustainable Carpet Solutions: Comfort, Style, and Responsibility Underfoot",
      excerpt:
        "Explore how Annapurna Interiors eco-conscious carpet tiles combine luxury, performance, and environmental responsibility in modern interiors.",
      date: "May 7, 2025",
      category: "Sustainable Design",
      image: "https://th.bing.com/th/id/OIP.Q3H15hCjIJVyQFQU1TEwKQHaE9?cb=iwc2&rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "Aluminum Profiles in Modern Architecture",
      excerpt:
        "Explore how aluminum profiles are shaping modern interiors with strength, style, and sustainability.",
      date: "May 7, 2025",
      category: "Architecture",
      image: "https://th.bing.com/th/id/OIP.6WyiSLagAy2AbqcurGDEJAHaE8?cb=iwc2&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="blogSLider-container">
      <div className="blogSLider-header">
        <h1 className="blogSLider-main-title">Blogs</h1>
        <p className="blogSLider-subtitle">
          Expert perspectives on interior design trends and techniques
        </p>
      </div>

      <div className="blogSLider-grid">
        {blogs.map((blog) => (
          <div className="blogSLider-card" key={blog.id}>
            <div className="blogSLider-card-link">
              <div className="blogSLider-card-image-container">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blogSLider-card-image"
                />
                <div className="blogSLider-card-category">{blog.category}</div>
              </div>
              <div className="blogSLider-card-content">
                <div className="blogSLider-card-meta">
                  <span className="blogSLider-card-date">{blog.date}</span>
                </div>
                <h2 className="blogSLider-card-title">{blog.title}</h2>
                <p className="blogSLider-card-excerpt">{blog.excerpt}</p>
                <div
                  onClick={() => navigate(`/blogs/${blog.id}`)}
                  className="blog-card-readmore"
                >
                  Read Article →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all-button" onClick={() => navigate("/blogs")}>
          View All Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
