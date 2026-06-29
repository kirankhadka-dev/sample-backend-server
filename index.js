import express from "express";

const app = express();

const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
  return res.json({
    message: "Server is healthy ",
    status: "production",
    change:"I am responding to the changes "
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
