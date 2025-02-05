import { AxiosHelper } from "../config/AxiosHelper";

// export const createRoomApi = async (roomDetails) => {
//     try {
//         const response = await AxiosHelper.post('/api/v1/rooms', roomDetails);
//         return response.data;
//     } catch (error) {
//         console.error('Error creating room', error);
//         throw error; // Rethrow the error to handle it in the calling function
//     }
// };

export const createRoomApi = async (roomDetails) => {
    try {
        const response = await AxiosHelper.post('/api/v1/rooms', roomDetails);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Server error:", error.response.status, error.response.data);
        } else if (error.request) {
            console.error("No response from server:", error.request);
        } else {
            console.error("Axios setup error:", error.message);
        }
        throw error;
    }
};
