import { useSetRecoilState } from "recoil";
import { blogListState } from "../../../libs/recoil/blogState";
import { useNavigate } from "react-router-dom";

type DeleteBlogButtonProps = {
  blogIndex: number;
};

const DeleteBlogButton = ({ blogIndex }: DeleteBlogButtonProps) => {
  const navigate = useNavigate();
  const setBlogList = useSetRecoilState(blogListState);

  /** 블로그 삭제 핸들러 */
  const handleClickDeleteBlog = () => {
    setBlogList(prevBlogList => {
      return [...prevBlogList.slice(0, blogIndex), ...prevBlogList.slice(blogIndex + 1)]
    });

    navigate('/blog', { replace: true });
  };

  return (
    <button type="button" onClick={handleClickDeleteBlog}>
      블로그 삭제
    </button>
  );
};

export default DeleteBlogButton;