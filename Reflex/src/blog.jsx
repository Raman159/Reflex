import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import "./CSS/Blog.css";
import Button2 from "./btn";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://192.168.1.166:9000/api/blog");
      if (response.status === 200) {
        setBlogs(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [blogs.length]);

  return (
    <div className="blog">
      <h1 className="text">Blog</h1>
      <p className="sub-text">
        Stay informed with the latest trends, insights, and updates from the
        tech world.
      </p>
      <div className="blog-carousel">
        {blogs && blogs.length > 0 ? (
          <>
            <div className="carousel-container">
              <BlogCard blog={blogs[currentIndex]} />
            </div>
            <div className="carousel-indicators">
              {blogs.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
            <div className="seemore-button">
              <Button2 btncontent="See More" link="/BlogPage" />
            </div>
          </>
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;