import {axiosService} from "./axios.srvice";
import {urls} from "../configs/url";

const albumsService = {
    getAll:() => axiosService.get(urls.albums)
};

export {
    albumsService
}