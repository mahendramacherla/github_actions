const express = require("express");
const app = express();
const port = 3000; // Node.js app will run on 3000 internally

app.get("/", (req, res) => {
  res.send("Hello from Node.js app running behind Nginx!");
});

// Sample API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API endpoint" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`App listening at http://localhost:${port}`);
});
