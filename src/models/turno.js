import { Schema, model } from "mongoose";

const turnoSchema = new Schema ({
    nombreDueno: {
        type: String,
        minLenght: 2,
        maxLenght: 50,
        required: true,
        unique: true
    },
    detalleCita: {
        type: String,
        minLenght: 10,
        maxLenght: 200,
        required: true,        
    },
    nombreVeterinario: {
        type: String,
        minLenght: 2,
        maxLenght: 50,
        required: true,
    },
    nombreMascota: {
        type: String,
        minLenght: 2,
        maxLenght: 50,
        required: true,
    },
    hora: {
        type: String,        
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                const regex = /^(8:30|9:30|10:30|11:30|12:30|13:30|14:30|15:30)$/;
                return regex.test(value);
            },
            message: 'La hora seleccionada no es válida'
        }
    },
    fecha: {
        type: Date,        
        required: true,
    },    
    });

    const Turno = model('turno', turnoSchema);

    export default Turno;