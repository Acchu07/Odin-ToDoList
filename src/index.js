import './style.css';

function initializeWebpage() {document.querySelector('#btnCreateProject').addEventListener('click',()=>{
    document.querySelector('.Create-Project').showModal();    
})
document.querySelector('#btnCreateToDo').addEventListener('click',()=>{
    document.querySelector('.Create-ToDo').showModal();    
})
document.querySelector('#btnCreateNotes').addEventListener('click',()=>{
    document.querySelector('.Create-Notes').showModal();    
})}

initializeWebpage();