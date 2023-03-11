import axios from "axios";

const BASE_URL = "http://razortype.pythonanywhere.com/api";
const FORMAT_TYPE = "?format=json";

export const checkIfUserIsEventCreator = async (user_address: string) => {
    const requestURL = `${BASE_URL}/checkcreator/${user_address}?format=json`
    const res = await axios.get(requestURL);
    return res;
}

export const getMainPageEvents = async () => {
    const requestURL = `${BASE_URL}/mainpage${FORMAT_TYPE}`;
    const res = await axios.get(requestURL);
    return res;
}

export const getAllEvents = async () => {
    const requestURL = `${BASE_URL}/events/all/${FORMAT_TYPE}`;
    const res = await axios.get(requestURL);
    return res;
}

export const getEventById = async (event_id: number) => {
    const requestURL = `${BASE_URL}/events/all/${event_id}`;
    const res = await axios.get(requestURL);
    return res;
}

export const getEventByAddress = async (address: string) => {
    const requestURL = `${BASE_URL}/events/creator/${address}${FORMAT_TYPE}`
    const res = await axios.get(requestURL);
    return res;
}