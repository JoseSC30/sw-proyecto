import express, { json } from 'express';
import morgan from 'morgan';//
import cors from "cors";
import {PORT} from './config.js'
import choferesRoutes from "./routes/choferes.routes.js";
import usuario_movilRoutes from "./routes/usuario_movil.routes.js";

const app = express();

app.use(cors());
app.use(morgan('dev'))//
app.use(json());

app.use("/api",choferesRoutes)
app.use("/api",usuario_movilRoutes)

app.listen(PORT)
console.log('Servidor en puerto ', PORT)