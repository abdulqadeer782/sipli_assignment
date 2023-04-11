import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://worldtimeapi.org/api/timezone",
})