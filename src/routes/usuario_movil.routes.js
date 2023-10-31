import { Router } from "express";
import {
    getUsuario_movil,
    getUsuario_moviles,
    updateUsuario_moviles,
    createUsuario_moviles,
    deleteUsuario_moviles,
} from "../controllers/usuario_movil.controller.js";

const router = Router()

router.get('/usuario_moviles', getUsuario_moviles)
router.get('/usuario_movil/:id', getUsuario_movil)
router.post('/usuario_movil', createUsuario_moviles)
router.patch('/usuario_movil/:id', updateUsuario_moviles)
router.delete('/usuario_movil/:id', deleteUsuario_moviles)

export default router