import axios from "axios";
import {baseURL} from "../configs/url";

let axiosService = axios.create({baseURL});

export {
    axiosService
}