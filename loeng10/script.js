let inputElement = document.querySelector (`imput`);
let todoListElement= document.querySelector (`.todo-list`);

let todos= [
    {
       id:0,
       text:`pese hambaid`,
       isDone: false,
    
    },

    {
        id:1,
        text:`mine tööle`,
        isDone: true,
     
     },
]

funktsion toggleIsDone (id){
    console.log (id);
    for (let i=0; 0<todos.length; i++){
       if(todos[i].id==id){
        todos [i].isDone =!todos[i].isDone;
       }
    }

    renderTodos ();
}

function deleteTodo(id){
    console.log (id);
    //todo kustutatakse ja list renderdatakse uuesti
}

functsion renderTodos(){
    todoListElement.innerHTML=` `;
    for (let i=0; 0<todos.length; i++){
        let klassid= `todo`;
        if (todos[i].isDone){
        klassid+= `done`;
        }
        todoListElement.innerHTML += `
        <div 
            class= ` ${klassid}`
            onclick="toggleIsDone"(${todos[i].id})"
        > 
            ${todos [i].text}
            <span onclick="deleteTodo (${todos[i].id})">[x]</span> 
        <div/>`
    }
    console.log (todos);
}
inputElement.addEventListener("keypress", function(event) {
   
    if (event.key === "Enter"){
     todos.push ({
        id:todoListElement.length,
        text:inputElement.value,
        isDone: falce,
     
     });

     inputElement.value = ` `;
     renderTodos{};
    }
}

render.Todos();
