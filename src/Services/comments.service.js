import {axiosService} from "./axios.service";
import {urls} from "../Constants/urls";

class CommentsService {
    getAll(){
        return axiosService.get(urls.comments)
    };
};

export const commentService = new CommentsService()