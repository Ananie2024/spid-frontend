import api from "./api";

export const submitInquiry = data =>
    api.post("/inquiries/public/create", data);