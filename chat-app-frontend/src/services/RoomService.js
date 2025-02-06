import { AxiosHelper } from "../config/AxiosHelper";

// create room
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

// join room
export const joinRoomApi = async (roomId) => {
    try {
        const response = await AxiosHelper.get(`/api/v1/rooms/${roomId}`);
        return response.data;
    } catch (error) {
        console.error('Error joining room', error);
        throw error;
    }
};
