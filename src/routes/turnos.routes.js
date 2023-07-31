import { Router } from "express";
import {
  crearTurno,
  obtenerTurno,
  obtenerTurnos,
  editarTurno,
  borrarTurno
} from "../controllers/turnos.controlador";

const router = Router();
router.route("/turnos").get(obtenerTurnos).post(crearTurno).put(editarTurno);
router.route("/turnos/:id").get(obtenerTurno).delete(borrarTurno);

export default router;
