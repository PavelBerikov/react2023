import axios from "axios";
import {baseUsersURL, baseCarsURL} from "../constants";

const axiosUsersService = axios.create({baseURL: baseUsersURL});
const axiosCarsService = axios.create({baseURL: baseCarsURL});

export {
    axiosUsersService, axiosCarsService
};