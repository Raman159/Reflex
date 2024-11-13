import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import "./CSS/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  

  const getBlogs = async () => {
    try {

      const response = await axios.get("http://localhost:9000/api/blog");
      console.log(response.data)
      if (response.status === 201) {
        setBlogs(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-content">
        {blogs && blogs.length > 0 ? (
          <BlogCard blog={blogs[0]} />
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
