const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello from Node app running in Docker & Kubernetes!, this is for test purpose"));
app.listen(3000, () => console.log("Server running on port 3000"));
