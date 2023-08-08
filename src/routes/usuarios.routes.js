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
import validarJWT from "../helpers/token-verify";

const router = Router();

router.route("/").get(obtenerUsuarios).post(login);
router.route("/nuevo").post([validarJWT,validarUsuario], crearUsuario);
router
  .route("/usuario/:id")
  .get(obtenerUsuario)
  .delete(validarJWT,eliminarUsuario)
  .put([validarJWT,validarEditarUsuario], editarUsuario);

export default router;
