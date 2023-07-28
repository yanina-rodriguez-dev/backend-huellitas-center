import { Router } from "express";
import { crearTurno, obtenerTurno, obtenerTurnos } from "../controllers/turnos.controlador";

const router = Router();
router.route("/turnos").get(obtenerTurnos).post(crearTurno);
router.route ("/turnos/:id").get(obtenerTurno)


export default router