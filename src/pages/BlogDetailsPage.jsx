import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../utils/blogs";
import "../pages/BlogDetailsPage.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) return <h2 className="not-found">Blog Not Found</h2>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page-wrapper">
      <div className="blog-hero">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content-area">
        <h1>{blog.title}</h1>
        <p className="blog-short-desc">{blog.description}</p>

        <div
          className="blog-full-content"
          dangerouslySetInnerHTML={{
            __html: blog.content.replace(/\n/g, "<br/>"),
          }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetails;
