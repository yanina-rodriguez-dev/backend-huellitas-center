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
.put(editarTurno);
router.route("/turnos/:id")
.get(obtenerTurno)
.delete(borrarTurno);

export default router;
