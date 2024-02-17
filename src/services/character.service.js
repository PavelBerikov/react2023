import {urls} from "../constants";
import {axiosService} from "./axios.service";

const characterService = {
    getAll: () => axiosService.get(urls.characters)
};
export {
    characterService
};