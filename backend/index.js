const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let agents = [];

app.get("/", (req, res) => {
  res.send("AgentOS API Running");
});

// Create agent
app.post("/agents", (req, res) => {
  const { name, role } = req.body;

  const newAgent = {
    id: Date.now(),
    name,
    role,
    memory: []
  };

  agents.push(newAgent);
  res.json(newAgent);
});

// Get all agents
app.get("/agents", (req, res) => {
  res.json(agents);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});