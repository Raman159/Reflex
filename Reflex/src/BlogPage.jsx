import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Navigation from "./Navigation";
import axios from "axios";
import Button2 from "./btn";
import Footer from "./footer";
import Socials from "./Socials.jsx";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; 

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

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          Stay updated with the latest trends shaping the digital world and beyond.
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
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog, index) => (
              <div key={index}>
                <BlogCard blog={blog} />
                <div className="seemore-button">
                  <Button2 btncontent="Read More" link={`/Blogs/${blog.id}`} />
                </div>
                {index !== currentBlogs.length - 1 && (
                  <hr
                    style={{
                      borderColor: "white",
                      borderWidth: "3px",
                      margin: "2% 10%",
                    }}
                  />
                )}
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
        {blogs.length > blogsPerPage && (
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`page-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <Socials />
      <Footer />
    </>
  );
};

export default BlogPage;
