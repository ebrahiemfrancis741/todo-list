import "./styles.css";
import { loadProjectsIntoAppState } from "./storage";
import { renderAllProjects, setupEventHandlers } from "./uiManager";
import { appState } from "./appState";

loadProjectsIntoAppState();
setupEventHandlers();
renderAllProjects();
console.log(appState);
