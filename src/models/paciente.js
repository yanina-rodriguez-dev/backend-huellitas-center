import { Schema, model } from "mongoose";

const pacienteSchema = new Schema({
    nombreDueno: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (valor) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
            }
        }
    },
    telefono: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function (valor) {
                return /^[0-9]{10}$/.test(valor);
            }
        }
    },
    direccion: {
        type: String,
        minLength: 5,
        maxLength: 60,
        required: true
    },
    historiaClinica: {
        type: String,
        minLength: 5,
        maxLength: 5000,
        required: true
    }
})

const Paciente = model('paciente', pacienteSchema);

export default Paciente;