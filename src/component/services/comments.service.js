import {axiosService} from "./axios.srvice";
import {urls} from "../configs/url";

const commentsService = {
    getAll:() => axiosService.get(urls.comments)
};

export {
    commentsService
}