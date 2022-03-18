import "dotenv/config"
import express, { response } from "express";

const app = express();
var port = 4040

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`)
});

app.listen(port, () => console.log("Running on port:", port));