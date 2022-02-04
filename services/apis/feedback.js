import axiosConfig from "../axiosConfig";

export const getAllFeedbacks = async () => {
    try {
        const { data } = await axiosConfig.get("/api/customers/feedback");
        return data;
    } catch (error) {
        // Handle error
        return error;
    }
};