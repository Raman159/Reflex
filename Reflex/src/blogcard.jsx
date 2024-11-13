// import React from "react";
import "./CSS/BlogCard.css";
import Button2 from "./btn";

const BlogCard = ({ blog }) => {
  const { imageUrl, title, excert } = blog || {};

  return (
    <div className="blog-card">
      {imageUrl && (
        <img src={imageUrl} alt={title || "Blog Cover"} className="blog-image" />
      )}
      <div className="blog-content">
        <h2>{title || "No Title Available"}</h2>
        <p>{excert || "No description available."}</p>
        <div className="seemore-button">
          <Button2 btncontent="See More" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
