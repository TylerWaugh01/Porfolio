import { PROJECTS } from "../../app/shared/PROJECTS";

export const selectAllProjects = () => {
    return PROJECTS;
};

export const selectRandomProject = () => {
    return PROJECTS[Math.floor(PROJECTS.length * Math.random())];
};