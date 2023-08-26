import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarPaciente = [
    check("nombreDueno")
    .notEmpty()
    .withMessage("El nombre del dueño es obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("El nombre debe tener entre 2 y 50 carateres"),
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .withMessage("El mail debe cumplir el formato nombre@dominio.com"),
    check("telefono")
    .notEmpty()
    .withMessage("El telefono del paciente es obligatorio")
    .matches(/^[0-9]{10}$/)
    .withMessage("El telefono debe tener 10 digitos"),
    check("direccion")
    .notEmpty()
    .withMessage("La direccion es obligatoria")
    .isLength({min: 5, max: 60})
    .withMessage("La direccion debe tener entre 5 y 60 carateres"),    
    check("historiaClinica")
    .notEmpty()
    .withMessage("La historia clínica del paciente es obligatoria")
    .isLength({min: 5, max: 5000})
    .withMessage("La historia clínica debe tener entre 5 y 5000 caracteres"),
    (req, res, next)=>{resultadoValidacion(req, res, next)}
]

export default validarPaciente;