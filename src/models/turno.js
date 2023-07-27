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
        type: Date,        
        required: true,
        validate: {
            validator: function (value) {
              const regex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
              return regex.test(value);
            },
            message: 'El formato de hora debe ser HH:mm'
          }
        },
    fecha: {
        type: Date,        
        required: true,
    },    
    });

    const Turno = model('turno', turnoSchema);

    export default Turno;