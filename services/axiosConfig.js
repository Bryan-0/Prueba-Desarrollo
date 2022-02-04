import axios from "axios";

const SERVER_URL = "";

export default axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});