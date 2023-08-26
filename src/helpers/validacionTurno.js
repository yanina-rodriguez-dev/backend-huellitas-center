import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTurno = [
    check("nombreDueno")
    .notEmpty()
    .withMessage("El nombre del dueño es obligatorio.")
    .isLength({min: 2, max: 50})
    .withMessage("El nombre debe tener entre 2 y 50 carateres"),
    check('detalleCita')
    .notEmpty()
    .withMessage('El detalle de la cita es obligatorio')
    .isLength({min:10, max:200})
    .withMessage('El detalle de la cita debe tener entre 10 y 200 caracteres.'),
    check('nombreVeterinario')
    .notEmpty()
    .withMessage('El nombre del veterinario es obligatorio.')
    .isLength({min: 2, max: 50})
    .withMessage('El nombre del veterinario debe contener entre 2 y 50 caracteres.'),
    check('nombreMascota')
    .notEmpty()
    .withMessage('El nombre de la mascota es obligatorio.')
    .isLength({min:2, max: 50})
    .withMessage('El nombre de la mascota debe contener entre 2 y 50 caracteres.'),
    check('hora')
    .notEmpty()
    .withMessage('Debe seleccionar una hora del turno.'),
    check('fecha')
    .notEmpty()
    .withMessage('La fecha del turno es obligatoria'),
    
    (req, res, next)=>{resultadoValidacion(req, res, next)}
]
export default validarTurno;