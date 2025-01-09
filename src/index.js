import "./styles.css";
import { loadProjectsIntoAppState } from "./storage";
import { renderAllProjects, setupEventHandlers } from "./uiManager";

loadProjectsIntoAppState();
setupEventHandlers();
renderAllProjects();
