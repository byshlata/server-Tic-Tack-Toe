"use strict";
exports.__esModule = true;
exports.app = void 0;
require("reflect-metadata");
var cors_1 = require("./cors/cors");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
exports.app = express();
process.on('unhandledRejection', function (reason, p) {
    console.log(reason, p);
});
exports.app.use(logger("dev"));
exports.app.use(express.json());
exports.app.use(express.urlencoded({ extended: false }));
exports.app.use(cookieParser());
exports.app.use(express.static(path.join(__dirname, "public")));
exports.app.use(cors(cors_1.corsOptions));
exports.app.use(function (req, res, next) {
    next(createError(404));
});
exports.app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 5000);
    res.render("error");
});
