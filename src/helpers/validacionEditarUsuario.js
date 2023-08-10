import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarEditarUsuario = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 carateres"),
  check("telefono")
    .notEmpty()
    .withMessage("El telefono es obligatorio")
    .matches(/^[0-9]{10}$/)
    .withMessage("El telefono debe tener 10 digitos"),
  check("dni")
    .notEmpty()
    .withMessage("El DNI es obligatorio")
    .matches(/^[0-9]{8}$/)
    .withMessage("El DNI debe tener 8 digitos"),
  check("direccion")
    .notEmpty()
    .withMessage("La direccion es obligatoria")
    .isLength({ min: 5, max: 60 })
    .withMessage("La direccion debe tener entre 5 y 60 carateres"),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validarEditarUsuario;
