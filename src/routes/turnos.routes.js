import { Router } from "express";
import {
  crearTurno,
  obtenerTurno,
  obtenerTurnos,
  editarTurno,
  borrarTurno
} from "../controllers/turnos.controlador";
import validarTurno from "../helpers/validacionTurno";

const router = Router();
router.route("/turnos")
.get(obtenerTurnos)
.post(validarTurno, crearTurno)
router.route("/turnos/:id")
.get(obtenerTurno)
.delete(borrarTurno)
.put(editarTurno);

export default router;
