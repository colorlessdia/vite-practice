// recoil
import { RecoilRoot } from 'recoil';
// router
import { RouterProvider } from 'react-router-dom';
import router from './libs/routes/router';

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
