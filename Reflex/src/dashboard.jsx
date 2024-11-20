import { useState } from "react";
import Login from "./Login";
import BlogMgmt from "./BlogMgmt";  
import './CSS/dashboard.css';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [blogs, setBlogs] = useState([]); 

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    if (role === "admin") {
      setIsAdmin(true);
    }
  };

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  const deleteBlog = (index) => {
    setBlogs((prevBlogs) => prevBlogs.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard-container">
      {isLoggedIn ? (
        <div className="admin-dashboard">
          <h2 className="dashboard-title">Admin Dashboard</h2>
          {isAdmin ? (
            <p className="admin-privileges-message">You do not have admin privileges.</p>
          ) : (
            <BlogMgmt 
              blogs={blogs} 
              addBlog={addBlog} 
              deleteBlog={deleteBlog} 
              className="blog-management-section"
            />
          )}
        </div>
      ) : (
        <Login onLogin={handleLogin} className="login-form" />
      )}
    </div>
  );
};

export default Dashboard;
