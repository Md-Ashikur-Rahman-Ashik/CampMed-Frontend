import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { CgProfile } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";
import { MdManageAccounts, MdOutlineManageAccounts } from "react-icons/md";

const Dashboard = () => {
  // Get admin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex md:flex-row">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-screen bg-green-50">
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
            <></>
          )}
        </ul>
      </div>
      <div className="p-8 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
