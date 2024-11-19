import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Navigation from "./Navigation";
import axios from "axios";
import Button2 from "./btn";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlog, setExpandedBlog] = useState(null);

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

  const handleReadMore = (blogId) => {
    if (expandedBlog === blogId) {
      setExpandedBlog(null);
    } else {
      setExpandedBlog(blogId);
    }
  };

  return (
    <>
      <Navigation />
      <div
        className="cover-image"
        style={{ backgroundImage: "url('./src/assets/image/blogbg.jpg')" }}
      >
        <h2 className="cover-text">Latest Trends</h2>
        <p className="cover-subtext">
          Stay updated with the latest trends shaping the digital world and
          beyond.
        </p>
      </div>
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
      <div className="blog">
        <div className="blog-content">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index}>
                <BlogCard blog={blog} />
                {expandedBlog === blog.id && (
                  <div
                    style={{
                      width: "80%",
                      margin: "0 10%",
                     fontSize:"1rem",
                      background: "transparent",
                      color:"white",
                      textAlign:"justify",
                    }}
                  >
                    {blog.content}
                  </div>
                )}
                <div className="seemore-button">
                  <Button2
                    btncontent={
                      expandedBlog === blog.id ? "Show Less" : "Read More"
                    }
                    onClick={() => handleReadMore(blog.id)}
                  />
                </div>
                <hr
                  style={{
                    borderColor: "white",
                    borderWidth: "3px",
                    margin: "2% 10%",
                  }}
                />
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;