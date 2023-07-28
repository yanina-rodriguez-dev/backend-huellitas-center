import { Router } from "express";
import { obtenerTurnos } from "../controllers/turnos.controlador";
import { crearPaciente, obtenerPaciente, obtenerPacientes } from "../controllers/pacientes.controlador";


const router = Router();

router.route("/pacientes").get(obtenerPacientes).post(crearPaciente);
router.route("/pacientes/:id").get(obtenerPaciente)

export default router;