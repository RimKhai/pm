import {useEffect, useState} from "react";
import {useAuthContext} from "../funcs/AuthProvider";
import getArray from "../api/getArray";
import NestedList from "../shared/NestedList";

const ListScreen = () => {
    const {auth} = useAuthContext();
    const [list, setList] = useState([]);
    const [errMsg, setErrMsg] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        getArray("/list/server", auth, setList, setErrMsg)
    },[])

    useEffect(() => {
        if (list.length > 0) {
            setLoaded(true)
            console.log(list)
        }
    },[list])

    if (loaded) {
        return <NestedList arr={list}/>
    } else {
        return <div>Loading...</div>
    }
}

export default ListScreen;