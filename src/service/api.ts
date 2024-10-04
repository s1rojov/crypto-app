import axios, { type AxiosRequestConfig } from "axios";

// Barcha so'rovlarga umumiy konfiguratsiyani o'rnatamiz
const axiosInstance = axios.create({
    baseURL: 'https://your-api-url.com', // Asosiy API URL (agar mavjud bo'lsa)
    headers: {
        'Content-Type': 'application/json', // Default headers
    }
});

const Api = {
    get(resource: string, config: AxiosRequestConfig = {}) {
        return axiosInstance.get(resource, config); // Qo'shimcha config berilishi mumkin
    },

    post(resource: string, data: any, config: AxiosRequestConfig = {}) {
        return axiosInstance.post(resource, data, config);
    },

    delete(resource: string, config: AxiosRequestConfig = {}) {
        return axiosInstance.delete(resource, config);
    },

    update(resource: string, data: any, config: AxiosRequestConfig = {}) {
        return axiosInstance.patch(resource, data, config);
    }
}

export default Api;
