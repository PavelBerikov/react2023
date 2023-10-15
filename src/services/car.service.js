import {axiosCarService} from "./axios.car.service";
import {urlsCar} from "../constants/car.urls";

class CarService{
    getAll(){
        return axiosCarService.get(urlsCar.cars)
    }
}

export const carService = new CarService()