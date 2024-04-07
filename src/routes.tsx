import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
