import "dotenv/config"
import express from "express";
import { router } from "./routes"

const app = express();
var port = 4040

app.use(express.json())
app.use(router)

app.get("/github", (request, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.CLIENT_ID}`)
});

app.get("/signin/callback", (request, response) => {
    const { code } = request.query;
    return response.json(code);
});

app.listen(port, () => console.log("Running on port:", port));