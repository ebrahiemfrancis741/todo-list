const { v4: uuidv4 } = require("uuid");

function generateId() {
  const id = uuidv4();
  return id;
}

function generateProjectId() {
  return "project-" + generateId();
}

export { generateProjectId };
