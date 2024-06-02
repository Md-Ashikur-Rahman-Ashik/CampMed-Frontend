import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const AdminRoute = () => {
    const {user, loading} = useContext(AuthContext)
    

    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;