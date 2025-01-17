import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { CgProfile } from "react-icons/cg";
import { IoIosAddCircle, IoMdAnalytics } from "react-icons/io";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { PiCampfireFill } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  // Get admin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex flex-col md:flex-row">
      <Helmet>
        <title>Dashboard | CampMed</title>
      </Helmet>
      {/* Dashboard sidebar */}
      <div className="md:w-64 md:min-h-screen bg-green-50">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/organizer-profile"}
                >
                  <CgProfile /> Organizer Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/add-camp"}
                >
                  <IoIosAddCircle /> Add A Camp
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/manage-camps"}
                >
                  <MdOutlineManageAccounts /> Manage Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/manage-registered-camps"}
                >
                  <MdManageAccounts /> Manage Registered Camps
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/analytics"}
                >
                  <IoMdAnalytics /> Analytics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/participant-profile"}
                >
                  <GiAmericanFootballPlayer /> Participant Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/registered-camps"}
                >
                  <PiCampfireFill /> Registered Camps
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"font-bold text-green-900"}
                  to={"/dashboard/payment-history"}
                >
                  <FaHistory /> Payment History
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink className={"font-bold text-green-900"} to={"/"}>
              <IoHomeOutline /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="md:p-8 p-2 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
