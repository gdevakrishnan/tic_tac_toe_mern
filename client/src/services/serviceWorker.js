import Axios from 'axios';

const BASE_URL = "http://localhost:5000/tic_tac_toe";

export const addUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/register`, userDetails);
    const response = {status: task.status, message: task.data.message};
    return response;
}

export const getUserDetails = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/login`, userDetails);
    const response = {status: task.status, message: task.data.message, token: task.data.token};
    return response;
}

export const userVerify = async (userDetails) => {
    const task = await Axios.post(`${BASE_URL}/user_verify`, userDetails);
    const response = {status: task.status,message: task.data.message, data: task.data.decoded}
    return response;
} 