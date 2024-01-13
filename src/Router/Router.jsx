import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Consult_Doctor from "../Components/Consult_Doctor/Consult_Doctor";
import Home from "../Components/Home/Home";
import Campaign from "../Components/Campaign/Campaign";
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
  {
    path: "/campaign",
    element: <Campaign />
  }
]);

export default router;
