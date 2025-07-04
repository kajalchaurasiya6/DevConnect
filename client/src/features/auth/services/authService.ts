// src/features/auth/services/authService.ts
import axios from "@/lib/axios";
import type { LoginSchemaType, SignupSchemaType } from "../types/auth.types";

export const loginUser = async (data: LoginSchemaType) => {
    try {
        const response = await axios.post("/users/login", data, {
            withCredentials: true, // important for cookie (refresh token)
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || "Login failed";
    }
};
export const signupUser = async (data: SignupSchemaType) => {
    try {
        const response = await axios.post("/users/signup", data);
        return response.data;
    } catch (error: any) {
        // You can throw a custom error message or log it
        throw error.response?.data?.message || "Signup failed";
    }
};

export const logoutUser = () => {
    try {
        return axios.post("/users/logout", { withCredentials: true });
    } catch (error) {
        console.log(error);
    }
};
