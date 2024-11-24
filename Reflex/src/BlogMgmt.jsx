import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CSS/BlogMgmt.css";

const Blogs = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    excert: "",
    content: "",
    blogImage: null,
    featuredImage: null,
  });

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

  const createBlog = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("author", newBlog.author);
      formData.append("excert", newBlog.excert);
      formData.append("content", newBlog.content);
      if (newBlog.blogImage) formData.append("blogImage", newBlog.blogImage);
      if (newBlog.featuredImage)
        formData.append("featuredImage", newBlog.featuredImage);

      const response = await axios.post(
        "http://192.168.1.166:9000/api/blog",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 201) {
        alert("Blog created successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Failed to create blog:", error);
      alert("Error creating blog.");
    }
  };

  useEffect(() => {
    if (blogId) fetchBlog();
  }, [blogId]);

  if (!blogId && !blog) {
    return (
      <div className="create-blog-form-container">
        <h1>Create a New Blog</h1>
        <form
          className="create-blog-form"
          onSubmit={(e) => {
            e.preventDefault();
            createBlog();
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={newBlog.title}
            onChange={(e) =>
              setNewBlog({ ...newBlog, title: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={newBlog.author}
            onChange={(e) =>
              setNewBlog({ ...newBlog, author: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Description"
            value={newBlog.excert}
            onChange={(e) =>
              setNewBlog({ ...newBlog, excert: e.target.value })
            }
            required
          ></textarea>
          <textarea
            placeholder="Content"
            value={newBlog.content}
            onChange={(e) =>
              setNewBlog({ ...newBlog, content: e.target.value })
            }
            required
          ></textarea>
          <label>Blog Image:</label>
          <input
            type="file"
            onChange={(e) =>
              setNewBlog({ ...newBlog, blogImage: e.target.files[0] })
            }
          />
          <label>Featured Image:</label>
          <input
            type="file"
            onChange={(e) =>
              setNewBlog({ ...newBlog, featuredImage: e.target.files[0] })
            }
          />
          <button type="submit">Create Blog</button>
        </form>
      </div>
    );
  }

  if (!blog) {
    return <p>Loading...</p>;
  }

  const blogImage = blog.documents?.find(
    (doc) => doc?.documentType === "blogImage"
  )?.document;

  const featuredImage = blog.documents?.find(
    (doc) => doc?.documentType === "featuredImage"
  )?.document;

  return (
    <>
      <div className="blog-header-text-content">
        <h2>
          The Importance of{" "}
          <span>Digital Transformation for Businesses in 2024</span>
        </h2>
        <p>
          At Reflex IT Solution, our portfolio reflects a dedication to creating
          powerful digital solutions that empower businesses.
        </p>
        <hr style={{ borderColor: "white", borderWidth: "1px" }} />
      </div>
      <div className="blog-single-container">
        <h1 className="blog-single-title">{blog.title}</h1>
        <p className="blog-single-author">{blog.author}</p>
        <div className="blog-image">
          {blogImage && (
            <img
              src={`http://192.168.1.166:9000/static/${blogImage}`}
              alt="Blog"
            />
          )}
        </div>
        <div className="blog-featured-image">
          {featuredImage && (
            <img
              src={`http://192.168.1.166:9000/static/${featuredImage}`}
              alt="Featured"
            />
          )}
        </div>
        <p className="blog-single-excert">{blog.excert}</p>
        <p className="blog-single-content">{blog.content}</p>
      </div>
    </>
  );
};

export default Blogs;
