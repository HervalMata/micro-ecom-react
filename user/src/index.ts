import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/api/users/currentuser", (req, res) => {
    res.send("hi there!");
});

app.listen(port, () => {
    console.log(`User server: Listening on port ${port}`);
});