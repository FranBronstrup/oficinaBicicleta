import express, { Express } from 'express';
let server: Express = express();
import cors from 'cors';


let port: number = Number(process.env.SERVER_PORT || 3000);

server.use(cors());
server.use(express.json());
server.use();

export default {
    start() {
        server.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }
}
