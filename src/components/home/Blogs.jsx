import React from "react";
import "../home/Blogs.css";
import { Link } from "react-router-dom";
import firstblog from "../../../public/firstblog.jpg";
import secondblog from "../../../public/woocommerce.jpg"
import thirdblog from "../../../public/php.jpg"
import tronacademy from "../../../public/tronacademy.JPG";
import earthcraft from "../../../public/earthcraft.JPG";
import dahab from "../../../public/dahab.JPG";

const Blogs = () => {
  const blogPosts = [
    {
      image: firstblog,
      title: "Why Choose React for Front-End Development",
      description:
        "Explore the key reasons why React has become the go-to library for building fast, scalable front-end apps.",
    },
    {
      image: secondblog,
      title: "Creating a WooCommerce Store with Custom Features – My Approach as a Developer",
      description:
        "A practical guide to help new developers understand the basics of Laravel and start building backend apps.",
    },
    
    {
      image: thirdblog,
      title: "What Is PHP and Why It's Still Relevant in 2025",
      description:
        "From code editors to deployment tools, here's a list of tools every full stack dev should know.",
    },
    
  ];

  return (
    <section className="blogs-section" id="blogs">
      <h2 className="blogs-heading">Latest Blogs</h2>
      <div className="blogs-container">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-card-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={`/blog/${index + 1}`} className="read-more-btn">
  Read More
</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
