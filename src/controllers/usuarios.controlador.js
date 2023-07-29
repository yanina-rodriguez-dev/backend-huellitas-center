import Usuario from '../models/usuario';
import bcrypt from 'bcrypt';

export const obtenerUsuarios = async (req, res) => {
    try {
        //pedir a la BD la lista de productos
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los usuarios',
        });
    }
};
export const obtenerUsuario = async (req, res) => {
    try {
        //pedir a la BD la lista de productos
        console.log(req.params.id)
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los usuarios',
        });
    }
};
export const crearUsuario = async (req, res) => {
    try {
        // verificar si el email existe
        let usuario = await Usuario.findOne({email: req.body.email})
        if (usuario) {
            return res.status(400).json({mensaje: 'Ya existe un usuario con el mail enviado'})
        }
        // console.log(req.body);
        const usuarioNuevo = new Usuario(req.body);
        await usuarioNuevo.save();
        res.status(201).json({
            mensaje: 'El usuario se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear el usuario',
        });
    }
};