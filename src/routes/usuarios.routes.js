import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  login,
  eliminarUsuario,
  editarUsuario
} from "../controllers/usuarios.controlador";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();

router.route("/").get(obtenerUsuarios).post(login);
router.route("/nuevo").post(validarUsuario, crearUsuario);
router.route("/usuario/:id").get(obtenerUsuario).delete(eliminarUsuario).put(editarUsuario);

export default router