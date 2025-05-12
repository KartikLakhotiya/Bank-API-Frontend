import { create } from 'zustand';
import { axiosInstance } from '@/lib/axios';
import { LoginDetails } from '@/types/types';

export const useAuthStore = create((set, get) => ({
    authUser: null,
    checkAuth: async () => {
        try {
            const response = await axiosInstance.get("/v1/check-auth");
            set({ authUser: response.data })
        } catch (error) {
            console.log("Error in checkAuth", error);
            set({ authUser: null })
            
        }
    },
    login: async (data:LoginDetails) => {
        set({ isLoggingIn: true });
        try {
            const response = await axiosInstance.post("/users/login", data);
            console.log('response',response);
            set({ authUser: response.data.user })
            // toast.success("Logged in successfully");
        } catch (error) {
            // toast.error(error.response.data.message);
            console.log(error);
        }
    },
}))