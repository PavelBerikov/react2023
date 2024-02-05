import {axiosService} from "./axios.service";
import {urls} from "../constants";

const charactersService = {
    gerAll: (page = 1) => axiosService.get(urls.characters, {params: {page}})
};

export {charactersService};