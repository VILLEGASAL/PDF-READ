import exp from "constants";
import express from "express";


const app = express();
const PORT = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {

    res.status(200).render("index.ejs");
});


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}...`);
});