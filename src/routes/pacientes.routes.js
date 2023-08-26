import { Router } from "express";
import {
  crearPaciente,
  obtenerPaciente,
  obtenerPacientes,
  borrarPaciente,
  editarPaciente,
} from "../controllers/pacientes.controlador";
import validarPaciente from "../helpers/validacionPaciente";
import validarJWT from "../helpers/token-verify";

const router = Router();

router
  .route("/pacientes")
  .get(obtenerPacientes)
  .post([validarJWT,validarPaciente], crearPaciente);
router
  .route("/pacientes/:id")
  .get(obtenerPaciente)
  .delete(validarJWT,borrarPaciente)
  .put([validarJWT,validarPaciente], editarPaciente);

export default router;