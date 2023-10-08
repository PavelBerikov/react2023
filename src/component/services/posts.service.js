import axios from "axios";
import {axiosService} from "./axios.srvice";
import {urls} from "../configs/url";

const postsService = {
    getAll:() => axiosService.get(urls.posts),
    getById:(id) => axiosService.get(`${urls.posts}/${id}`)
};

export {
    postsService
}