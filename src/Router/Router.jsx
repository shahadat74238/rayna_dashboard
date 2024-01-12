import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/ErrorPage/Home/Home";
import Consult_Doctor from "../Components/Consult_Doctor/Consult_Doctor";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
          path: "/consult_doctor",
          element: <Consult_Doctor />
        }
    ]
  },
]);

export default router;
