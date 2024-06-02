import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const useAdmin = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            
        </div>
    );
};

export default useAdmin;