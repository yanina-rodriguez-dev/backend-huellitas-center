import { Router } from "express";
import {
  crearTurno,
  obtenerTurno,
  obtenerTurnos,
  editarTurno,
  borrarTurno
} from "../controllers/turnos.controlador";
import validarTurno from "../helpers/validacionTurno";
import validarJWT from "../helpers/token-verify";

const router = Router();
router.route("/turnos")
.get(obtenerTurnos)
.post([validarJWT,validarTurno], crearTurno)
router.route("/turnos/:id")
.get(obtenerTurno)
.delete(validarJWT,borrarTurno)
.put([validarJWT,validarTurno],editarTurno);

export default router;
