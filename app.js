const info=require('./info')
 const yargs=require('yargs')
yargs.command(
    {
        command:'add',
        descripe:'add info',
        builder:{
            id:{
                descripe:'this the id of the student to be added',
                type:'number',
                demandOption:true
            },
            name:{
                descripe:'this the name of the student to be added',
                type:'string',
                demandOption:true
            },
            subject:{
                descripe:'this the subject of the student to be added',
                type:'string',
                demandOption:true
            },
            grade:{
                descripe:'this the grade of the student to be added',
                type:'number',
                demandOption:true
            },
            comment:{
                descripe:'this the comment of the student to be added',
                type:'string',
                demandOption:true,
                default:''
            }
        },
        handler:( argv )=>{
            info.addInfo(argv.id ,argv.name , argv.subject , argv.grade , argv.comment)

        }
    }

)
yargs.command(
    {
        command:'delete',
        descripe:'delete info',
        builder:{
            id:{
                descripe:'this the id of the student to be added',
                type:'number',
                demandOption:true
            }
           
            },
        handler:(argv)=>{
            info.removeInfo(argv.id)
        }
    }

)
yargs.command(
    {
        command:'list',
        descripe:'list info',
        handler:()=>{
            info.listInfo()

        }
    }

)
yargs.command(
    {
        command:'read',
        descripe:'read info',
        builder:{
            id:{
                descripe:'this the id of the student to be added',
                type:'number',
                demandOption:true
            }
           },
        handler:(argv)=>{
            info.readInfo(argv.id)

        }
    }
)
console.log(yargs.argv)