import { express, Router} from 'express';
import { Server as HttpServer} from 'http';
import { Server as IOServer} from 'socket.io';
import * as dotenv from './env';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 8080 || process.env.PORT;
const httpServer = HttpServer.createrServer(app);
const io = new IOServer(httpServer);
const apiRoutes = new Router();

app.use("/", apiRoutes);
app.use("/api", apiRoutes);


const server = app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}. at ${new Date().toLocaleString()}`)
});

server.on("error", (err) => {
    console.log(err);
})