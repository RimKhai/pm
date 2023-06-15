import {useAuthContext} from "./AuthProvider";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const {setAuth} = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        setAuth("");
        localStorage.setItem("auth", "");
        navigate("/");
    })
}

export default Logout;