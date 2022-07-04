import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/comments",
    headers: {'Content-type': 'application/json; charset=UTF-8',}
});
const saveComments = (obj) => axiosInstance.post('', obj);
export {saveComments}