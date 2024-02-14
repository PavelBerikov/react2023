import {axiosUsersService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getAll: () => axiosUsersService.get(urls.users),
    create: (user) => axiosUsersService.post(urls.users, user)
};

export {
    usersService
};