import express from 'express';

// usar un puerto
const app =express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})
// middelwares: funciones que se ejecutan antes de las rutas