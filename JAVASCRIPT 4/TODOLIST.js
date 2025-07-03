let todo =[];

let req = prompt("Please enter your request");

while(true){
  
    if(req === "Quit"){
        console.log("You are quitting")
        break;
    }

    if(req === "List"){
        console.log("------------");
        for(let i=0; i<todo.length; i++){

            console.log(i, todo[i]);

        }
        console.log("-----------");

    }else if(req === "Add"){
        let task= prompt("Enter task you want to add");
        todo.push(task);
        console.log("Task is added!!!");

    }else if(req === "Delete"){
        let idx= prompt("Enter task index you want to delete");
        todo.splice(idx, 1);
        console.log("Task is deleted successfully!!!!!")

    }else{
        console.log("Wrong Request!!");
    }
    req = prompt("Please enter your request");
}