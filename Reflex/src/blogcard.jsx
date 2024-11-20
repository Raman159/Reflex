import "./CSS/BlogCard.css";

const BlogCard = ({ blog, showContent }) => {
  const {
    title = "No Title Available",
    excert = "No description available.",
    author = "Unknown Author",
    content = null,
    documents = [],
  } = blog || {};

  const blogImage = documents.find(
    (doc) => doc?.documentType === "featuredImage"
  )?.document;

  return (
    <div className="blog-card">
      {blogImage && (
        <img
          src={`http://192.168.1.166:9000/static/${blogImage}`}
          alt={title}
          className="blog-image"
        />
      )}
      <div className="blog-content">
        <h2>{title}</h2>
        <p className="author-main">
          Written by <span className="author">{author}</span>
        </p>
        <p>{excert}</p>
        {showContent && content && <p>{content}</p>}
      </div>
    </div>
  );
};

export default BlogCard;
