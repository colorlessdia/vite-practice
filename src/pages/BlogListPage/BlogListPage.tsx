import { useRecoilValue } from "recoil";
import { blogListState } from "../../libs/recoil/blogState";
import BlogItem from "../../components/Blog/BlogItem/BlogItem";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const blogListStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridAutoRows: '300px',
  gap: '20px',
});

const BlogListPage = () => {
  const blogList = useRecoilValue(blogListState);

  const navigate = useNavigate();

  const handleClickNavigateCreateBlog = () => {
    navigate('/create-blog');
  };

  return (
    <>
      <button type="button" onClick={handleClickNavigateCreateBlog}>새글 작성하기</button>
      <ul css={blogListStyle}>
        {
          blogList.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
          ))
        }
      </ul>
    </>
  );
};

export default BlogListPage;