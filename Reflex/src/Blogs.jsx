import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CSS/SingleBlog.css";
import Navigation from "./Navigation";
import Button2 from "./btn";
import Footer from "./footer";
import Socials from "./Socials.jsx";

const Blogs = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await axios.get("http://192.168.1.166:9000/api/blog");
      if (response.status === 200) {
        const selectedBlog = response.data.data.find(
          (blog) => blog.id === blogId
        );
        setBlog(selectedBlog);
      }
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  const blogImage = blog.documents?.find(
    (doc) => doc?.documentType === "blogImage"
  )?.document;

  return (
    <>
      <Navigation />
      <div className="header-text-content">
        <h2>
          The Importance of{" "}
          <span style={{ color: "blue" }}>
            Digital Transformation for Businesses in 2024
          </span>
        </h2>
        <p>
          At Reflex IT Solution, our portfolio reflects a dedication to creating
          powerful digital solutions that empower businesses.
        </p>
        <hr style={{ borderColor: "white", borderWidth: "1px" }} />
      </div>
      <div className="single-blog-container">
        <h1 className="single-blog-title">{blog.title}</h1>
        <p className="single-blog-author">{blog.author}</p>
        <div className="single-blog-image">
          {blogImage && (
            <img
              src={`http://192.168.1.166:9000/static/${blogImage}`}
              alt={blog.title}
              className="blog-image"
            />
          )}
        </div>
        <p className="single-blog-exert">{blog.excert}</p>
        <p className="single-blog-content">{blog.content}</p>
        <div className="seemore-button">
          <Button2 btncontent="Go Back" link="/BlogPage" />
        </div>
      </div>
      <Socials />
      <Footer />
    </>
  );
};

export default Blogs;
