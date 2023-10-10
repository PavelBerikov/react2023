import {axiosService} from "./axios.service";
import {urls} from "./urls";

const postsService = {
    getAll:() => axiosService.get(urls.posts)
};

export {
    postsService
}