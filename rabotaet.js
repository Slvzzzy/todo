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
                    <input type="text">
                    <button class="changeTask"> Apply </button>
                    </div>
                    `
                }
                else {
                    return`<div> 
            <div> task: ${el.text}  </div>
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
const onEditTask = (text, i) => {

    render()
}
const editTask = (text, index) => {
    da
}