import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        minLength:4,
        maxLength:30,
        required:true
    },
    direccion:{
        type: String,
        minLength:4,
        maxLength:32,
        required:true
    },
    telefono:{
        type: Number,
        minLength:2,
        maxLength:16,
        required:true
    },
    dni:{
        type: Number,
        minLength:4,
        maxLength:16,
        required:true
    },
    email:{
        type: String,
        minLength:8,
        maxLength:32,
        required:true,
        unique:true
    },
    password:{
        type: String,
        minLength:8,
        required:true
    },
    esAdmin:{
        type: Boolean,
        required:true
    }
});

const Usuario = model('usuario',usuarioSchema);
export default Usuario;