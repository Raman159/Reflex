import "./CSS/BlogCard.css";

const BlogCard = ({ blog, showContent }) => {
  const { imageUrl, title, excert, author, content } = blog || [];

  return (
    <div className="blog-card">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title || "Blog Cover"}
          className="blog-image"
        />
      )}
      <div className="blog-content">
        <h2>{title || "No Title there"}</h2>
        <p className="author-main">
  Written by <span className="author">{author || "No author name available"}</span> on
</p>

        <p>{excert || "No description available."}</p>
        {showContent && content && <p>{content}</p>}
      </div>
    </div>
  );
};

export default BlogCard;
