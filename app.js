const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(process.argv);
//let argv2 = process.argv;
// let parametro = argv2[2];

// let base = '10';
//let base = parametro.split('=')[1];
// console.log(argv);

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla( argv.base, argv.limite );
    break;
  
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      // .then( archivo => console.log( `Archivo creado: ${ archivo.green }` ) )
      .then( archivo => console.log( `Archivo creado: `, colors.green(archivo) ) )
      .catch( error => console.log( error ) );
    break;
  
  default:
    console.log('Comando no reconocido')  ;
  
}

