import {axiosCarsService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosCarsService.get(urls.cars),
    create: (car) => axiosCarsService.post(urls.cars, car),
    deleteById: (id) => axiosCarsService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosCarsService.put(`${urls.cars}/${id}`, car)
};

export {
    carService
};