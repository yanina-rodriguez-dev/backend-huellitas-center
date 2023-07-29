import { Router } from "express";
import {
  crearTurno,
  obtenerTurno,
  obtenerTurnos,
  editarTurno,
} from "../controllers/turnos.controlador";

const router = Router();
router.route("/turnos").get(obtenerTurnos).post(crearTurno).put(editarTurno);
router.route("/turnos/:id").get(obtenerTurno);

router
  .route("/turnos/:id")
  .get(obtenerTurno)  
  .put(editarTurno);

export default router;
