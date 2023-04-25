window.addEventListener("load", ()=>{
    if(document.readyState == "complete"){
        window.addEventListener("keypress", (e)=>{
            let key = e.key.toLowerCase();
            if(key == "enter"){
                createTask();
            }
        });
    }
});

function createTask(){
    let list = document.getElementById("lists");
    let task_input = document.getElementById('task');
    
    if(task_input.value == null || task_input.value == ""){
        task_input.style.border = "1px solid red";
        setTimeout(()=>{
            task_input.style.border = "1px solid #eee";
        }, 1000);
    }else{
        createNewTask();
    }

    function createNewTask(){
        let task = document.createElement("div");
        let task_check = document.createElement("input");
        let task_info = document.createElement("span"); 
        
        // Give them Classes
        task.classList.add("task");
        task_info.classList.add("task_name");
    
        // give the span element a value
        task_info.innerHTML = `<b><i>${task_input.value}<i/><b>`;
        
        // specify input type
        task_check.type = "checkbox"
        task_check.onclick = endTask;
    
        // put the input:checkbox and the span element in the div
        task.appendChild(task_check);
        task.appendChild(task_info);
    
        list.appendChild(task);
        
        task_input.value = task_input.defaultValue;
    }
    // create HTML components
    
}

function endTask(e){
    // this is the task class DIV
    let task = e.target.parentElement;

    // These are the children of the div
    let task_info = task.children;

    // get the last element of the div
    task_info[1].style.fontWeight = "normal";
    task_info[1].style.fontStyle = "normal";
    task_info[1].style.textDecoration = "line-through";
    
    setTimeout(()=>{
        task.remove();
    }, 2000);
}