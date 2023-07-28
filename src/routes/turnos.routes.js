import { Router } from "express";
import { obtenerTurnos } from "../controllers/turnos.controlador";

const router = Router();
router.route("/turnos").get(obtenerTurnos);



export default router