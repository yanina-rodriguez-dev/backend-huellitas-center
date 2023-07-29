import { Router } from "express";

import { crearPaciente, obtenerPaciente, obtenerPacientes, borrarPaciente, editarPaciente } from "../controllers/pacientes.controlador";

const router = Router();

router.route("/pacientes").get(obtenerPacientes).post(crearPaciente);
router.route("/pacientes/:id").get(obtenerPaciente).delete(borrarPaciente);

export default router;