import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { blogPosts } from "../utils/blogs";
import "../pages/BlogDetailsPage.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return <h2 className="not-found">Blog Not Found</h2>;
  }

  return (
    <>
      {/* 🔥 SEO META TAGS */}
      {blog.seo && (
        <Helmet>
          <title>{blog.seo.metaTitle}</title>

          <meta
            name="description"
            content={blog.seo.metaDescription}
          />

          <meta
            name="keywords"
            content={blog.seo.keywords}
          />
        </Helmet>
      )}

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
          />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
