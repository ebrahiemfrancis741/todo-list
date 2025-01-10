import "./styles.css";
import { renderAllProjects, setupEventHandlers } from "./uiManager";
import { loadProjectsIntoAppState } from "./appState";

loadProjectsIntoAppState();
setupEventHandlers();
renderAllProjects();
