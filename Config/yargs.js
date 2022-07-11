const { number } = require('yargs');

const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
                describe:'Es la base de la tabla'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
                describe:'Muestra la tabla en consola'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                demandOption:false,
                describe:'Hasta donde quiere que llege la tabla'
            })
            .check((argv, option)=>{
                if(isNaN(argv.b)){
                    throw 'la base tiene que ser un numero'
                }
                return true
            })
            .argv;


module.exports = argv;