import React from "react";
import "./CSS/BlogCard.css";
import Button2 from "./btn";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.imageUrl} alt="Blog Cover" className="blog-image" />
      <div className="blog-content">
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        <div>
          <Button2 btncontent="See More" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
