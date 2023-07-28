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