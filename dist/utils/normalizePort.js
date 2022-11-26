"use strict";
exports.__esModule = true;
exports.normalizePort = void 0;
var normalizePort = function (val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
exports.normalizePort = normalizePort;
