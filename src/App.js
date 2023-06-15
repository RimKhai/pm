import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./shared/Navbar";
import RequireAuth from "./funcs/RequireAuth";
import Layout from "./shared/Layout";
import LoginScreen from "./screens/LoginScreen";
import Logout from "./funcs/Logout";
import CreateScreen from "./screens/CreateScreen";
import UpdateScreen from "./screens/UpdateScreen";
import ListScreen from "./screens/ListScreen";
import {AuthProvider} from "./funcs/AuthProvider";
import ConfigScreen from "./screens/ConfigScreen";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="login" element={<LoginScreen/>}></Route>

                        <Route exact path="" element={<RequireAuth><div>yo</div></RequireAuth>}></Route>
                        <Route path="create" element={<RequireAuth><CreateScreen/></RequireAuth>}></Route>
                        <Route path="update" element={<RequireAuth><UpdateScreen/></RequireAuth>}></Route>
                        <Route path="list/server" element={<RequireAuth><ListScreen/></RequireAuth>}></Route>
                        <Route path="config" element={<RequireAuth><ConfigScreen/></RequireAuth>}></Route>

                        <Route path="logout" element={<RequireAuth><Logout/></RequireAuth>}></Route>
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
