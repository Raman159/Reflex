import React, { useState } from "react";
import './CSS/BlogMgmt.css';

const BlogMgmt = ({ blogs, addBlog, deleteBlog }) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && image) {
      addBlog({ title, description, imageUrl: image });
      setTitle("");
      setDescription("");
      setImage(null);
    }
  };

  return (
    <div className="blog-mgmt">
      <h1>Manage Blog Content</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {image && <img src={image} alt="Preview" className="image-preview" />}
        </div>
        <button type="submit">Add Blog</button>
      </form>

      <div className="blog-list">
        <h2>Existing Blogs</h2>
        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>
              <h3>{blog.title}</h3>
              <button onClick={() => deleteBlog(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogMgmt;
