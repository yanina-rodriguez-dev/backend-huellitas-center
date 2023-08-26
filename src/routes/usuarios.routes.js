import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  login,
  eliminarUsuario,
  editarUsuario,
} from "../controllers/usuarios.controlador";
import validarEditarUsuario from "../helpers/validacionEditarUsuario";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();

router.route("/").get(obtenerUsuarios).post(login);
router.route("/nuevo").post(validarUsuario, crearUsuario);
router
  .route("/usuario/:id")
  .get(obtenerUsuario)
  .delete(eliminarUsuario)
  .put(validarEditarUsuario, editarUsuario);

export default router;