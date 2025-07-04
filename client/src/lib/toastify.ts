// src/lib/toast.ts
import { toast, type ToastPosition } from "react-toastify";

export const showSuccessToast = (message: string, autoClose?: number, position: ToastPosition = "top-right") => {
    toast.success(message, {
        position: position,
        autoClose: autoClose ?? 3000,
        pauseOnHover: true,
    });
};

export const showErrorToast = (message: string, autoClose?: number, position: ToastPosition = "top-right") => {
    toast.error(message, {
        position: position,
        autoClose: autoClose ?? 3000,
        pauseOnHover: true,
    });
};

export const showInfoToast = (message: string, autoClose?: number, position: ToastPosition = "top-right") => {
    toast.info(message, {
        position: position,
        autoClose: autoClose ?? 3000,
        pauseOnHover: true,
    });
};
