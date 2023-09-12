import { setToken, useAxios } from "./axiosClient";
import { accessToken, getValidToken } from "./tokenClient";


setToken(getValidToken())

export const signInUser = async (url,formData) => {
    try {
        const response = await useAxios.post(`/${url}`, formData);
        const { data, status } = response;
        if (status === 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            sessionStorage.setItem(`${accessToken}`, data.token)
            return { data: data.payload, status, success: data.success, message: data?.message, token: data.token };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const createUser = async (url,formData) => {
    try {
        const response = await useAxios.post(`/${url}`, formData);
        const { data, status } = response;
        if (status === 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const userDashboard = async (url) => {
    try {
        const response = await useAxios.get(`/${url}`);
        const { data, status } = response;
        if (status === 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {
        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

export const logOutUser = async (url) => {
    try {
        const response = await useAxios.delete(`/${url}`);
        const { data, status } = response;
        if (status === 200 && data.success === false) {
            return { data: {}, status, success: data.success, message: data?.message };
        } else if (status === 200 && data.success === true) {
            return { data: data.payload, status, success: data.success, message: data?.message };
        }
    } catch (error) {

        return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
    }
};

// export const createUserWithGoogleSignIn = async (formData) => {
//     try {
//         const response = await useAxios.post(`/user/social`, formData);
//         const { data, status } = response;
//         if (status === 200 && data.success === false) {
//             return { data: {}, status, success: data.success, message: data?.message };
//         } else if (status === 200 && data.success === true) {
//             return { data: data.payload, status, success: data.success, message: data?.message };
//         }
//     } catch (error) {

//         return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
//     }
// };


// export const signInUserUsingGoogle = async (formData) => {
//     try {
//         const response = await useAxios.post(`/user/social/google`, formData);
//         const { data, status } = response;
//         if (status === 200 && data.success === false) {
//             return { data: {}, status, success: data.success, message: data?.message };
//         } else if (status === 200 && data.success === true) {
//             await storeData(accessToken, data.token)
//             await AsyncStorage.setItem(`${accessToken}`, data.token)
//             setToken(getValidToken())
//             return { data: data.payload, status, success: data.success, message: data?.message, token: data.token };
//         }
//     } catch (error) {

//         return { status: error?.response?.status || 500, message: error?.response?.data?.message || error?.message, success: false };
//     }
// };

