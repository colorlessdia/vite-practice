import { css } from "@emotion/react";
import { Blog } from "../../../types/blogType";
import { Link } from "react-router-dom";

type BlogItemProps = {
  blog: Blog;
};

const blogItemStyle = css({
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px'
});

const blogLinkStyle = css({
  display: 'block',
  width: '100%',
  height: '100%',
});

const BlogItem = ({ blog }: BlogItemProps) => {
  return (
    <li key={blog.id} css={blogItemStyle}>
      <Link to={`/blog/${blog.id}`} css={blogLinkStyle}>
        <h3>{blog.title}</h3>
        <p>{blog.content}</p>
      </Link>
    </li>
  );
};

export default BlogItem;