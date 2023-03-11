import axios from "axios";

const BASE_URL = "http://razortype.pythonanywhere.com/api";
const FORMAT_TYPE = "?format=json";

export const getAllTickets = async () => {
    const requestURL = `${BASE_URL}/tickets/all/${FORMAT_TYPE}`;
    const res = await axios.get(requestURL);
    return res;
}

export const getTicketById = async (ticket_id: number) => {
    const requestURL = `${BASE_URL}/tickets/all/${ticket_id}/${FORMAT_TYPE}`;
    const res = await axios.get(requestURL);
    return res;
}

export const getTicketForInventory = async(address: string) => {
    const requestURL = `${BASE_URL}/tickets/owner/${address}${FORMAT_TYPE}`
    const res = await axios.get(requestURL);
    return res;
}

export const getTicketForMemory = async (address: string) => {
    const requestURL = `${BASE_URL}/tickets/memory/${address}/${FORMAT_TYPE}`
    const res = await axios.get(requestURL);
    return res;
}

// ticket-issuer/<int:ticket_id>/<str:wallet>
// YAPIM ASAMASINDA
export const ticketIssuer = async (ticket_id: number, wallet: string) => {
    const requestURL = `${BASE_URL}/${ticket_id}/${wallet}/${FORMAT_TYPE}`;
    const res = await axios.get(requestURL);
    return res;
}