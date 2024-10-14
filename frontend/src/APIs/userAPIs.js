import axiosInstance from "./axiosInstance";

export const getAllUser = async() => {
    const response = await axiosInstance.post("/users/getAll");
    return response;
}