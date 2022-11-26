import "reflect-metadata"
import { connect } from "mongoose";
import { corsOptions } from "./cors/cors";

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')


export const app = express();

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p)
})

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors(corsOptions))

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res) {

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 5000);
    res.render("error");
});


