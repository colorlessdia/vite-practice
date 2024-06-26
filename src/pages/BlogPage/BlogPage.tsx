import { Outlet } from 'react-router-dom';

const BlogPage = () => {

  return (
    <>
      <h2>블로그 페이지</h2>
      <Outlet />
    </>
  );
};

export default BlogPage;