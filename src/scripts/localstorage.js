import {arrayNotes} from "./notes/notes"

function test(){
    arrayNotes.forEach((object)=>{
        localStorage.setItem(object.title,JSON.stringify(object.data));
    })  
    // const newTest = arrayNotes[0];
    // localStorage.setItem("note",JSON.stringify(newTest.data));
}

function test1(){
    const newObject = JSON.parse(localStorage.getItem("Note 1"))
    console.log(newObject)
}

export {test,test1}