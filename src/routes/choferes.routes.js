import { Router } from "express";
import {
    getChoferes,
    getChofer,
    createChoferes,
    updateChoferes,
    deleteChoferes,
} from "../controllers/choferes.controller.js";

const router = Router()

router.get('/choferes', getChoferes)
router.get('/choferes/:id', getChofer)
router.post('/choferes', createChoferes)
router.patch('/choferes/:id', updateChoferes)
router.delete('/choferes/:id', deleteChoferes)

export default router
