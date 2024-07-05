let input=prompt("what would you like to do");
const todos=['complete DSA','complete js'];
while (input!=='quit'&& input!=="q") {
    if(input==='list'){
        console.log("***********************");
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***********************");
    }
    else if(input==='new'){
        const newTodo=prompt('OK,What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input==='delete'){
        const index=prompt("enter the index of the list you want to be deleted");
       const ok=parseInt(index);
       if(!Number.isNaN(ok)){
        const deleted=todos.splice(index,1);
        console.log(`ok, deleted ${deleted[0]}`);
       }
       else{
        console.log("unknown index");
       }
    }
    input=prompt("what would you like to do")
}
console.log("OK QUIT THE APP!!!");
