import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext({})

const useAuthContext = () => useContext(AuthContext)
export const useAuth = () => {
    const [auth, setAuth] = useState("")

    return {auth, setAuth}
}

const AuthProvider = ({children}) => {
    const auth = useAuth()

    if (auth.auth === "") {
        auth.setAuth(localStorage.getItem("auth"));
    }

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

export { useAuthContext, AuthProvider}