function addTask(){
 const input=document.getElementById("taskInput");
 const task=input.value.trim();
 if(task===""){alert("Please enter a task");return;}
 const li=document.createElement("li");
 const label=document.createElement("span");label.textContent=task;
 label.addEventListener("click",()=>li.classList.toggle("completed"));
 const deleteButton=document.createElement("button");deleteButton.textContent="Delete";
 deleteButton.onclick=function(event){event.stopPropagation();li.remove();};
 li.appendChild(label);li.appendChild(deleteButton);
 document.getElementById("taskList").appendChild(li);input.value="";
}
