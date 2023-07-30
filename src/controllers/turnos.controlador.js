import Turno from "../models/turno";

export const obtenerTurnos = async (req, res)=>{
    try{
        const turnos = await Turno.find();
        res.status(200).json(turnos);
    }catch(error){
      console.log(error);
      res.status(404).json({
        mensaje: 'Se produjo un error al buscar los turnos'
      });
    }
}

export const crearTurno = async(req, res)=>{
  try{
  const nuevoTurno = new Turno(req.body);
  await nuevoTurno.save();
  res.status(201).json ({
    mensaje: 'El turno fue creado de manera exitosa',
  })
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje:'Error en la creacion del turno',
    });
  }
}

export const obtenerTurno = async (req, res)=>{
  try{
    const turno = await Turno.findById(req.params.id);
    res.status(200).json(turno);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje:'Error al crear el turno',
    })
  }
}

export const borrarTurno = async (req, res)=>{
  try{
   await Turno.findByIdAndDelete(req.params.id);
   res.status(200).json({
    mensaje: 'El turno fue eliminado correctamente',
  });
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error no se pudo eliminar el turno',
    });
  }
}