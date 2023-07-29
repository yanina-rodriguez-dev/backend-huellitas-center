import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        minLength:2,
        maxLength:20,
        required:true
    },
    direccion:{
        type: String,
        minLength:2,
        maxLength:20,
        required:true
    },
    telefono:{
        type: Number,
        minLength:2,
        maxLength:20,
        required:true
    },
    dni:{
        type: Number,
        minLength:2,
        maxLength:20,
        required:true
    },
    email:{
        type: String,
        minLength:2,
        maxLength:30,
        required:true,
        unique:true
    },
    password:{
        type: String,
        minLength:2,
        required:true
    },
    esAdmin:{
        type: Boolean,
        required:true
    }
});

const Usuario = model('usuario',usuarioSchema);
export default Usuario;