import axios from "axios";
import {baseURL} from "../Constants/urls";

const axiosService = axios.create({baseURL});

export {axiosService};