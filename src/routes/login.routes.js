import { Router } from "express";
import {
    showLogin,
    login,
} from "../controllers/login.controller.js";

const router = Router()

router.get('/login', showLogin); // Ruta para mostrar el login
router.post('/login', login); // Ruta para logear un usuario

export default router

