import axiosInstance from "./axiosInstance";

export const userLogin = async (data) => {
    const response = await axiosInstance.post("/auth/login", data);
    return response;
}

export const userRegister = async(data) => {
    const response = await axiosInstance.post("/users/register", data);
    return response;
}