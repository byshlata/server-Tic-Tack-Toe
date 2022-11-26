import { corsOptions } from "./cors/cors"
import { useSocketServer } from "socket-controllers";
import { Server } from "socket.io"

export const socketServer = (httpServer) => {
    const io = new Server(httpServer, {
        cors: corsOptions
    })
    useSocketServer(io, { controllers: [__dirname + "/api/controllers/*.ts"] });

    return io
}