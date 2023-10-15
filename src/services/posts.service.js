import {axiosService} from "./axios.service";
import {urls} from "../constants/url";

class PostsService{
    getAll(){
        return axiosService.get(urls.posts)
    }
};

export const postService = new PostsService()