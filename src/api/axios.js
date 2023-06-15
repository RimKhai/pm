import axios from 'axios';
import address from "./address";

export default axios.create({
    baseURL: address
});
