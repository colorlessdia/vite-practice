import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { blogListState } from "../../libs/recoil/blogState";
import { css } from "@emotion/react";
import DeleteBlogButton from '../../components/Blog/DeleteBlogButton/DeleteBlogButton';

const inputStyle = css({
  width: '100%',
  height: '30px',
  paddingLeft: '20px',
});

const textareaStyle = css({
  width: '100%',
  height: '400px',
  padding: '20px',
  resize: 'none',
});

const BlogDetailPage = () => {
  const { blogId } = useParams();

  const blogList = useRecoilValue(blogListState);

  // blogId 에 해당하는 블로그 찾기
  const blogIndex = blogList.findIndex(blog => (blog.id).toString() === blogId);
  const currentBlog = blogList[blogIndex];

  return (
    <>
      <input
        type="text"
        value={currentBlog.title}
        css={inputStyle}
      />
      <textarea
        css={textareaStyle}
      >
        {currentBlog.content}
      </textarea>
      <DeleteBlogButton blogIndex={blogIndex} />
    </>
  );
};

export default BlogDetailPage;