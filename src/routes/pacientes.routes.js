import { Router } from "express";
import { obtenerTurnos } from "../controllers/turnos.controlador";
import { crearPaciente, obtenerPaciente, obtenerPacientes } from "../controllers/pacientes.controlador";
import validarPaciente from "../helpers/validacionPaciente";


const router = Router();

router.route("/pacientes").get(obtenerPacientes).post(validarPaciente,crearPaciente);
router.route("/pacientes/:id").get(obtenerPaciente)

export default router;