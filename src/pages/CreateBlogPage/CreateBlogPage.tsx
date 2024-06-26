import { css } from "@emotion/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { blogListState } from "../../libs/recoil/blogState";

const textareaStyle = css({
  width: '100%',
  height: '500px',
  padding: '20px',
  resize: 'none',
  outline: 'none',
  ':focus': {
    outline: 'none'
  }
});

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const [blogTitle, setBlogTitle] = useState<string>('');
  const [blogText, setBlogText] = useState<string>('');
  const setBlogList = useSetRecoilState(blogListState);

  /** 블로그 타이틀 변경 감지 */
  const handleChangeBlogTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogTitle(e.target.value);
  };

  /** 블로그 텍스트 변경 감지 */
  const handleChangeBlogText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlogText(e.target.value);
  };

  /** 블로그 글 발행 핸들러 */
  const handleClickCreateBlogText = () => {
    const blogTemplate = {
      id: new Date().getTime(),
      title: blogTitle,
      content: blogText,
    };

    setBlogList(prevBlogList => [blogTemplate, ...prevBlogList]);

    navigate('/blog', { replace: true });
  };

  return (
    <>
      <input type="text" value={blogTitle} onChange={handleChangeBlogTitle} placeholder="블로그 제목을 입력하세요" />
      <textarea css={textareaStyle} value={blogText} onChange={handleChangeBlogText}></textarea>
      <button type="button" onClick={handleClickCreateBlogText}>글 발행</button>
    </>
  );
};

export default CreateBlogPage;