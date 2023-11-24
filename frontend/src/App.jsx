import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import AuthLayout from './Layout/AuthLayout';
import NoteLayout from './Layout/NoteLayout';
import PasswordResetLayout from './Layout/PasswordResetLayout';
import Note from './pages/Note';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from "./pages/activate";
import { Provider } from 'react-redux';
import store from './store';
import { CookiesProvider } from 'react-cookie';

const routesConfig = [
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/",
          element: <RegisterForm />,
        },
        {
          path: "/activate/:uid/:token",
          element: <Activate/>,
        },
      ],
    },
    {
      element: <PasswordResetLayout/>,
      children: [
        {
          path: "/reset_password",
          element: <ResetPassword />,
        },
        {
          path: "/password/reset/confirm/:uid/:token",
          element: <ResetPasswordConfirm/>,
        },
      ]
    },
    {
      element: <NoteLayout />,
      children: [
        {
          path: "/notes",
          element: <Note />,
        },
      ],
    },
  ];

const router = createBrowserRouter(routesConfig);

function App(){
    return (
        <CookiesProvider><Provider store={store}> <RouterProvider router={router}/> </Provider></CookiesProvider>
    );
}


export default App;