import {arrayNotes} from "./notes/notes"

function test(){
    arrayNotes.forEach((object)=>{
        localStorage.setItem(JSON.stringify(object.title),JSON.stringify(object.data));
    })  
}

function test1(){
    const newObject = JSON.parse(localStorage.getItem("Note 1"))
    console.log(localStorage.getItem("Note 1"))
    console.log(newObject)
}

export {test,test1}