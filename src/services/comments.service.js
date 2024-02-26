import {axiosUsersService} from "./axios.service";
import {urls} from "../constants";

const commentsService ={
    getAll: () => axiosUsersService.get(urls.comments)
};

export {
    commentsService
};
