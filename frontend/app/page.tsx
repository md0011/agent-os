"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [agents, setAgents] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const fetchAgents = async () => {
    const res = await axios.get("http://localhost:5000/agents");
    setAgents(res.data);
  };

  const createAgent = async () => {
    await axios.post("http://localhost:5000/agents", { name, role });
    setName("");
    setRole("");
    fetchAgents();
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">AgentOS</h1>

      <div className="mb-6">
        <input
          placeholder="Agent Name"
          className="border p-2 mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Agent Role"
          className="border p-2 mr-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button
          onClick={createAgent}
          className="bg-black text-white px-4 py-2"
        >
          Create Agent
        </button>
      </div>

      <div>
        {agents.map((agent: any) => (
          <div key={agent.id} className="border p-4 mb-2">
            <h2 className="font-semibold">{agent.name}</h2>
            <p className="text-sm text-gray-500">{agent.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}