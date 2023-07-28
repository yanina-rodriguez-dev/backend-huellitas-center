import { Router } from "express";

import { crearPaciente, obtenerPacientes } from "../controllers/pacientes.controlador";

const router = Router();

router.route("/pacientes").get(obtenerPacientes).post(crearPaciente)

export default router;