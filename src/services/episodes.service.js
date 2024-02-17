import {axiosService} from "./axios.service";
import {urls} from "../constants";

const episodesService = {
    getAll: () => axiosService.get(urls.episodes)
};