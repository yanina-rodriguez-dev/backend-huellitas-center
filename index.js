import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

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