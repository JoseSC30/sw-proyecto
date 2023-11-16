import express, { json } from 'express';
import morgan from 'morgan';//
import cors from "cors";
import { PORT } from './config.js'
import choferesRoutes from "./routes/choferes.routes.js";
import usuario_movilRoutes from "./routes/usuario_movil.routes.js";
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import session from 'express-session';
import loginRoutes from "./routes/login.routes.js";
const app = express();


app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

// app.use("/api",choferesRoutes)
// app.use("/api",usuario_movilRoutes)


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hbs = exphbs.create({
    extname: '.hbs',
    layoutsDir: `${__dirname}/views`, // Especifica la ubicación de tus archivos de diseño
    defaultLayout: 'login', // Especifica el archivo de diseño predeterminado
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', `${__dirname}/views`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use('/', loginRoutes);
app.get('/', (req, res) => {
	res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
});
