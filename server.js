const express = require("express");
const app = express();

app.use(express.json());

let state = {
  text: "натурал",
  until: null,
  updatedAt: Date.now()
};

app.get("/state", (req, res) => {
  res.json(state);
});

app.post("/update", (req, res) => {
  state = {
    ...req.body,
    updatedAt: Date.now()
  };
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log("Server running");
});
