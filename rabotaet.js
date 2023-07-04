'use strict'
const inputBox = document.getElementById("input-box"),
      taskContainer = document.querySelector(".container");
let activeEditTaskIndex;
const allTasks = JSON.parse(localStorage.getItem("allTasks")) || []
const saveTaskToLocalStorage = () => {
    localStorage.setItem('allTasks', JSON.stringify(allTasks))
}
const addTask = () => {
    const text = inputBox.value
    const newTask = {
        text,
        checked: true
    };
    allTasks.push(newTask);
    render()
}
const render = () => {
            taskContainer.innerHTML = allTasks.map((el,i) => {
                if (activeEditTaskIndex === i) {
                    return `
                    <div>
                    <input id="inputText" type="text" value=${el.text}>
                    <button onclick="editTask(${i})"> Apply </button>
                    </div>
                    `
                }
                else {
                    return`<div> 
            <div> task: ${el.text}  </div>
             <input onclick="editCheckBox(${i})" id="checkedStorage" type="checkbox" checked=${el.checked}>
            <div onclick="onDeleteTask(${i})"> delete </div>
             <div onclick="onEditTask(${i})"> edit </div>
            </div>`
                }
            }
            ).join('')
        inputBox.value = '';
    saveTaskToLocalStorage()
}
render()
const onDeleteTask = (i) => {
    allTasks.splice(i,1)
    render()
}
const onEditTask = (i) => {
    activeEditTaskIndex = i
    render()
}
const editTask = (i) => {
    const editTaskText = taskContainer.querySelector('#inputText')
    allTasks[i].text = editTaskText.value
    activeEditTaskIndex = null
    render()
}
const editCheckBox =(i) => {
    const editTaskChecked = taskContainer.querySelector('#checkedStorage')
    console.log(editTaskChecked.checked)
    allTasks[i].checked = editTaskChecked.checked
    console.log(editTaskChecked)
    saveTaskToLocalStorage()
}
