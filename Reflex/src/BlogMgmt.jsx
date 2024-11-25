import { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/BlogMgmt.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    excert: "",
    content: "",
    blogImage: null,
    featuredImage: null,
    id: null,
  });

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

  const deleteBlog = async (blogId) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.166:9000/api/blog/${blogId}`
      );
      if (response.status === 200) {
        setBlogs(blogs.filter((blog) => blog.id !== blogId));
        alert("Blog deleted successfully!");
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
      alert("Error deleting blog.");
    }
  };

  const createOrUpdateBlog = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("author", newBlog.author);
      formData.append("excert", newBlog.excert);
      formData.append("content", newBlog.content);
      if (newBlog.blogImage) formData.append("blogImage", newBlog.blogImage);
      if (newBlog.featuredImage)
        formData.append("featuredImage", newBlog.featuredImage);

      let response;
      if (newBlog.id) {
        response = await axios.put(
          `http://192.168.1.166:9000/api/blog/${newBlog.id}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        response = await axios.post(
          "http://192.168.1.166:9000/api/blog",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      if (response.status === 201 || response.status === 200) {
        alert("Blog saved successfully!");
        getBlogs();
        setNewBlog({
          title: "",
          author: "",
          excert: "",
          content: "",
          blogImage: null,
          featuredImage: null,
          id: null,
        });
      }
    } catch (error) {
      console.error("Failed to save blog:", error);
      alert("Error saving blog.");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="blog-table-container">
        <h3>All Blogs</h3>
        <table className="blog-table">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <tr key={blog.id}>
                  <td>{index + 1}</td>
                  <td>
                    {blog.documents?.find(
                      (doc) => doc?.documentType === "blogImage"
                    )?.document && (
                      <img
                        src={`http://192.168.1.166:9000/static/${
                          blog.documents.find(
                            (doc) => doc?.documentType === "blogImage"
                          )?.document
                        }`}
                        alt="Blog"
                        className="blog-image-small"
                      />
                    )}
                  </td>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>

                    <button
                      onClick={() => {
                        setNewBlog({
                          title: blog.title,
                          author: blog.author,
                          excert: blog.excert,
                          content: blog.content,
                          blogImage: null,
                          featuredImage: null,
                          id: blog.id,
                        });
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No blogs available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Create/Update Blog Form */}
      <div className="create-blog-form-container">
        <h1>{newBlog.id ? "Update Blog" : "Create a New Blog"}</h1>
        <form
          className="create-blog-form"
          onSubmit={(e) => {
            e.preventDefault();
            createOrUpdateBlog();
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={newBlog.author}
            onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={newBlog.excert}
            onChange={(e) => setNewBlog({ ...newBlog, excert: e.target.value })}
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
          <button type="submit">
            {newBlog.id ? "Update Blog" : "Create Blog"}
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogPage;
