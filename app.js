let input=document.getElementById("inputaddTask")
let inputValue=input.value
let AddBtn=document.getElementById("addBtn")
let clearBtn=document.getElementById("clearBtn")




AddBtn.addEventListener("click",(event)=>{
    console.log("btnclicked");
    if(input.value===""){
        alert("please enter your task")
    }
    else{
        addTask(input.value);
    input.value=""

    }
    

})
clearBtn.addEventListener("click",(event)=>{
    
    let main = document.getElementById("main");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
})


function addTask(inputValue){
   
    let heading=document.createElement("h2")
    heading.textContent=inputValue
    heading.classList.add("task-list-item")
    console.log(heading);
    let btn=document.createElement("button")
    btn.classList.add("btn")//if we want to add class
    btn.classList.add("red-btn")
    btn.textContent="X"
    let taskListDiv=document.createElement("div")

    let main=document.getElementById("main")
    taskListDiv.id="task-list-div"//if we want to add id

    taskListDiv.appendChild(heading)
    taskListDiv.appendChild(btn)
    main.appendChild(taskListDiv)

    btn.addEventListener("click",(event)=>{
        taskListDiv.remove()


    })
}