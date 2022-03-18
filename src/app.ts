import express from "express";

const app = express();
var port = 4040

app.listen(port, () => console.log("Running on port:", port));