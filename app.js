const {crearArchivo} = require('./Helpers/multiplicar')
const argv = require('./Config/yargs')    
            
console.clear();



// const [,,argv3='base=5']=process.argv;
// const [ , base=5 ]= argv3.split('=');



crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo = ()=>console.log('creado'))
    .catch(err => console.log("hola"))




