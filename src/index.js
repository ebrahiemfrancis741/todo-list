import "./styles.css";
import { renderAllProjects, setupEventHandlers } from "./uiManager";
import { loadProjectsIntoAppState, loadTasksIntoAppState } from "./appState";

loadProjectsIntoAppState();
loadTasksIntoAppState();
setupEventHandlers();
renderAllProjects();
