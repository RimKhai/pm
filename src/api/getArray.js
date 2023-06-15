import axios from "./axios";

async function getArray(url, auth, setArray, setErrMsg) {
    await axios.get(url, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'auth': auth
        },
    })
        .then(response => {
            if (response.data !== null) {
                setArray(response.data);
            } else {
                setArray([]);
            }
        })
        .catch(function (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.response?.status === 400) {
                setErrMsg('One of fields is empty');
            } else {
                setErrMsg('Load failed');
            }
        });
}

export default getArray