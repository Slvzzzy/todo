'use strict'
const data = [];
const inputBox = document.getElementById("input-box"),
      taskContainer = document.querySelector(".container");
let activeEditTaskIndex;
const addTask = () => {
    const text = inputBox.value
    const newTask = {
        text,
        checked: true
    };
    data.push(newTask);
    render()
}
const render = () => {
            taskContainer.innerHTML = data.map((el,i) => {
                if (activeEditTaskIndex === i) {
                    return `
                    <div>
                    <input id="inputText" type="text" value=${el.text} >
                    <button onclick="editTask(${i})"> Apply </button>
                    </div>
                    `
                }
                else {
                    return`<div> 
            <div> task: ${el.text}  </div>
             <input type="checkbox" checked=${el.checked}>
            <div onclick="onDeleteTask(${i})"> delete </div>
             <div onclick="onEditTask(${i})"> edit </div>
            </div>`
                }
            }
            ).join('')
        inputBox.value = '';
}
const onDeleteTask = (i) => {
    data.splice(i,1)
    render()
}
const onEditTask = (i) => {
    activeEditTaskIndex = i
    render()
}
const editTask = ( index) => {
    const editTaskText = taskContainer.querySelector('#inputText')
    data[index].text = editTaskText.value
    activeEditTaskIndex = null
    render()
}