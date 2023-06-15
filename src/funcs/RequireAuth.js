import {Navigate, useLocation} from "react-router-dom";
import {useAuthContext} from "./AuthProvider";

function RequireAuth({ children }){
    const location = useLocation()
    const {auth} = useAuthContext()
    if (auth === "") {
        const uth = localStorage.getItem("auth");
        if (uth === "") {
            console.log("ayo")
            console.log(auth)
            return <Navigate to='/login' state={{ from: location.pathname }} />
        } else {
            console.log("uth")
            console.log(uth)
        }
    }
    console.log("yo")
    console.log(auth)
    return children
}

export default RequireAuth

