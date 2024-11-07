import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "./CSS/Blog.css";
import image1 from "./assets/image/crreative.jpg";
import image2 from "./assets/image/marketing.jpg";

const Blog = () => {
  const blogs = [
    {
      title: "How Reflex IT Solution Can Help Your Business",
      description:
        "At Reflex IT Solution, we offer comprehensive digital transformation services tailored to meet your business needs. From e-commerce platforms and ERP systems to school management solutions.",
      imageUrl: image2,
    },
    {
      title: "Digital Solutions for a Modern Business",
      description:
        "Transform your business with state-of-the-art digital solutions that streamline processes, enhance efficiency, and elevate your customer experience.",
      imageUrl: image1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [blogs.length]);

  return (
    <div className="blog-carousel">
      <h1 className="blog-text">Blogs</h1>
      <p className="blog-subtext">
        Explore the latest insights, tips, and trends in technology and digital
        solutions with the Reflex IT Solution blog.
      </p>
      <BlogCard blog={blogs[currentIndex]} />
    </div>
  );
};

export default Blog;
