import axios from "axios";
import {carBaseURL} from "../constants/car.urls";

const axiosCarService = axios.create({baseURL: carBaseURL});

export {axiosCarService}