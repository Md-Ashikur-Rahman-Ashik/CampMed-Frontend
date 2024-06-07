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
import AddCamp from "../layout/AddCamp/AddCamp";
import ManageCamps from "../layout/ManageCamps/ManageCamps";
import UpdateCamp from "../layout/UpdateCamp/UpdateCamp";
import Welcome from "../layout/Welcome/Welcome";
import Analytics from "../layout/Analytics/Analytics";
import ParticipantProfile from "../layout/ParticipantProfile/ParticipantProfile";
import RegisteredCamps from "../layout/RegisteredCamps/RegisteredCamps";
import ManageRegisteredCamps from "../layout/ManageRegisteredCamps/ManageRegisteredCamps";
import Payment from "../layout/Payment/Payment";

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
      {
        path: "add-camp",
        element: (
          <AdminRoute>
            <AddCamp></AddCamp>
          </AdminRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <AdminRoute>
            <ManageCamps></ManageCamps>
          </AdminRoute>
        ),
      },
      {
        path: "update-camp/:id",
        element: (
          <AdminRoute>
            <UpdateCamp></UpdateCamp>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/camp/${params.id}`),
      },
      {
        path: "manage-registered-camps",
        element: (
          <AdminRoute>
            <ManageRegisteredCamps></ManageRegisteredCamps>
          </AdminRoute>
        ),
      },
      // General Route
      {
        path: "welcome",
        element: <Welcome></Welcome>,
      },
      // Participant's route
      {
        path: "analytics",
        element: (
          <PrivateRoute>
            <Analytics></Analytics>
          </PrivateRoute>
        ),
      },
      {
        path: "participant-profile",
        element: (
          <PrivateRoute>
            <ParticipantProfile></ParticipantProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "registered-camps",
        element: (
          <PrivateRoute>
            <RegisteredCamps></RegisteredCamps>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/participants/${params.id}`),
      },
    ],
  },
]);

export default router;
