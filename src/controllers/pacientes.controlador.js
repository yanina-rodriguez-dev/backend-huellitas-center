import Paciente from "../models/paciente";

export const obtenerPacientes = async (req, res)=>{
    try {
        const pacientes = await Paciente.find();
        res.status(200).json(pacientes);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los pacientes',
        });
    }
};

export const crearPaciente = async (req, res)=>{
    try {
        
        const pacienteNuevo = new Paciente(req.body);
        await pacienteNuevo.save();
        res.status(201).json({
            mensaje: 'El paciente se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear paciente',
        });
    }
}