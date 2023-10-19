import Axios from 'axios';

const BASE_URL = "http://localhost:5000/tic_tac_toe";

export const addUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/register`, userDetails);
    const response = {status: task.status, message: task.data.message};
    return response;
}
