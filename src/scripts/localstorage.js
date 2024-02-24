import {arrayNotes,setDataNotes} from "./notes/notes"

function test(){
    arrayNotes.forEach((object)=>{
        localStorage.setItem(object.title,JSON.stringify(object.data));
    })  
    // const newTest = arrayNotes[0];
    // localStorage.setItem("note",JSON.stringify(newTest.data));
}

function test3(noteStringName){
    console.log(noteStringName)
    localStorage.removeItem(noteStringName)
}

function test1(){
    // const newObject = JSON.parse(localStorage.getItem("Note 2"))
    let i = 1;
    while(localStorage.getItem(`Note ${i}`)){
        console.log(i);
        const newObject = JSON.parse(localStorage.getItem(`Note ${i}`))
        console.log(newObject);
        setDataNotes(newObject);
        i++;
    }
}

export {test,test1,test3}