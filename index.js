import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config';
import './src/database/dbConnection';
import pacientesRouter from './src/routes/pacientes.routes';
import turnosRouter from './src/routes/turnos.routes';
import usuariosRouter from './src/routes/usuarios.routes';

// usar un puerto
const app =express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})
// middelwares: funciones que se ejecutan antes de las rutas

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
console.log(path.join(__dirname, '/public'));
app.use(express.static(path.join(__dirname, '/public')))

//rutas
//https://localhost:4000/apipaciente/pacientes
//http://localhost:4000/

app.use('/apiHuellitas/apipaciente', pacientesRouter);
app.use('/apiHuellitas/apiturno', turnosRouter );
app.use('/apiHuellitas/auth', usuariosRouter );