import axios from "axios";
import {baseCarsURL} from "../constants";


const axiosCarsService = axios.create({baseURL: baseCarsURL});

export {
    axiosCarsService
};