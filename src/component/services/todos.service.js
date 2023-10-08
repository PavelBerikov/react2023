import {axiosService} from "./axios.srvice";
import {urls} from "../configs/url";

const todosService = {
    getAll:() => axiosService.get(urls.todos)
};

export {
    todosService
}