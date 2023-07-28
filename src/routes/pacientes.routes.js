import { Router } from "express";

import { obtenerPacientes } from "../controllers/pacientes.controlador";

const router = Router();

router.route("/pacientes").get(obtenerPacientes)

export default router;