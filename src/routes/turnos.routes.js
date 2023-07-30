import { Router } from "express";
import { crearTurno, obtenerTurno, obtenerTurnos, borrarTurno } from "../controllers/turnos.controlador";

const router = Router();
router.route("/turnos").get(obtenerTurnos).post(crearTurno);
router.route ("/turnos/:id").get(obtenerTurno).delete(borrarTurno);


export default router