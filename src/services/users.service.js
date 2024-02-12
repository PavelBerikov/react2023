import {axiosUsersService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    create: (user) => axiosUsersService.post(urls.users, user)
};

export {
    usersService
};