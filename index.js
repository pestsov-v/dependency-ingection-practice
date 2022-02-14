import express from "express";
const app = express();

const PORT = process.env.PORT || 4000;
const serverHandling = () => {
  console.log(`Server is running on port ${PORT}`);
};

app.get("/hello", (req, res) => {
  res.send("Привет");
});

app.listen(PORT, serverHandling);
