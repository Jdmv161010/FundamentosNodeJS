//requires
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let listarTabla = ( base, limite = 10 ) => {
    for (let i = 1; i <= limite; i++){
        console.log(`${ base } * ${ i } = ${i*base}`);
    }
}

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise ( (resolve, reject) => {
        
        if (!Number(base)){
            reject('No es un valor valido');
            return
        }
        
        let data = '';

        for (let i = 1; i <= limite; i++){
            data += `${ base } * ${ i } = ${i*base}\n`;
        }

        fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(`tabla ${ base }.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla,
} 