//requires
const argv = require('yargs')
    .command('listar','Imprime las tablas de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}

const { crearArchivo } = require('./multiplicar/multiplicar')

crearArchivo(argv.base)
    .then(archivo => console.log(`El archivo ${ archivo } fue creado con exito`))
    .catch(e => console.log(e));