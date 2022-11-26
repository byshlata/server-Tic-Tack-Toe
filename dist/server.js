"use strict";
exports.__esModule = true;
require("reflect-metadata");
var http = require("http");
var socket_1 = require("./socket");
var app_1 = require("./app");
var normalizePort_1 = require("./utils/normalizePort");
var debug = require("debug")("server:server");
var port = (0, normalizePort_1.normalizePort)(process.env.PORT || 5000);
app_1.app.set("port", port);
var server = http.createServer(app_1.app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
var io = (0, socket_1.socketServer)(server);
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
    console.log("Server Running on Port: ", port);
}
