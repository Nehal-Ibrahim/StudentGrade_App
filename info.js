const fs=require('fs')

const addInfo=(id,name,subject,grade,comment)=>{
    const info=loadInfo()
    const duplicateId=info.filter((information)=>{
        return information.id===id
    })
    console.log(duplicateId)
    if(duplicateId.length===0){

    info.push({ id:id , name:name , subject:subject , grade: grade , comment:comment})
    
saveInfo(info)
console.log('saved successfully')
}
else{
    console.log('Error duplicateId')
}}

const loadInfo=()=>{
    try{
        const dataBuffer=fs.readFileSync('info.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(err){
        return []
    }
}

const saveInfo=(info)=>{
    const saveData=JSON.stringify(info)
    fs.writeFileSync('info.json',saveData)
}

/////////////////////////////////////////////

const removeInfo=(id)=>{
    const info=loadInfo()
    const infoToKeep=info.filter((information)=>{
        return information.id!==id
    })
    console.log(infoToKeep)
    saveInfo(infoToKeep)
    console.log('Removed')
}
/////////////////////////////////////////////////////

const readInfo=(id)=>{
    const info=loadInfo()
    const information=info.find((information)=>{
        return information.id===id
    })
    if(information){
        console.log('ID:'+information.id ,'NAME:'+ information.name , 'SUBJECT:'+information.subject , 'GRADE:'+information.grade , 'COMMENT:!'+information.comment)
    }
    else{
        console.log('NotFound')
    }

}
////////////////////////////////////////////////////////
const listInfo=()=>{
    const info=loadInfo()
    info.forEach(information=> {
        console.log('NAME:'+information.name , 'GRADE:'+information.grade)
    })
    
}

module.exports={
    addInfo,
    removeInfo,
    readInfo,
    listInfo

}