//requires
const fs = require('fs');
// const fs = require('express'); paquetes que no son nativos de node
// const fs = require('./fs'); archivos que se encuentran en nuestro propio esquema

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        if ( !Number(base) ) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        
        let data = '';

        for( let i = 1; i <= limite; i++ ) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        //const data = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


