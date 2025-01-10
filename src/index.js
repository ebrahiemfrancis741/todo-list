import "./styles.css";
import { renderAllProjects, setupEventHandlers } from "./uiManager";
import { appState, loadProjectsIntoAppState, loadTasksIntoAppState } from "./appState";

loadProjectsIntoAppState();
loadTasksIntoAppState();
setupEventHandlers();
renderAllProjects();