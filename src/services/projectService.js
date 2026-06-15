import api from "./api";

export const getProjects = () =>
    api.get("/projects/public/all");

export const getProject = id =>
    api.get(`/projects/public/${id}`);