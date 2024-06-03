import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import CampDetails from "../components/CampDetails/CampDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import OrganizerProfile from "../layout/OrganizerProfile/OrganizerProfile";
import AvailCamps from "../components/AvailableCamps/AvailCamps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/camp-details/:id",
        element: <CampDetails></CampDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/camp/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/available-camps",
        element: <AvailCamps></AvailCamps>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // Admin routes
      {
        path: "organizer-profile",
        element: (
          <AdminRoute>
            <OrganizerProfile></OrganizerProfile>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
