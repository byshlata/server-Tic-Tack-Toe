"use strict";
exports.__esModule = true;
exports.socketServer = void 0;
var cors_1 = require("./cors/cors");
var socket_controllers_1 = require("socket-controllers");
var socket_io_1 = require("socket.io");
var socketServer = function (httpServer) {
    var io = new socket_io_1.Server(httpServer, {
        cors: cors_1.corsOptions
    });
    (0, socket_controllers_1.useSocketServer)(io, { controllers: [__dirname + "/api/controllers/*.ts"] });
    return io;
};
exports.socketServer = socketServer;
