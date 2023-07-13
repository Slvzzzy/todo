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
             allTasks.map((addTask,i) => {
                if (activeEditTaskIndex === i) {
                   createEditTask(addTask,i)
                }
                else {
                    creatActiveTask(addTask,i)
                }
            } )
            inputBox.value = '';
            saveTaskToLocalStorage()
}

const createEditTask = (addTask,i) => {
    const div1 = document.createElement('div'),
          input = document.createElement('input'),
          button = document.createElement('button')
    input.id = 'inputText'
    input.type = 'text'
    input.value =  addTask.text
    button.innerHTML = 'Apply'
    button.onclick = function () { editTask(i) }
    div1.appendChild(input)
    div1.appendChild(button)
    taskContainer.appendChild(div1)
}
const creatActiveTask = (addTask,i) => {
    const div2 = document.createElement('div'),
          div3 = document.createElement('div'),
          div4 = document.createElement('div'),
          div5 = document.createElement('div'),
          input2 = document.createElement('input')
    div3.innerHTML = `task: ${addTask.text}`
    input2.onclick = function () { editCheckBox(i) }
    input2.id = 'checkedStorage'
    input2.type = 'checkbox'
    input2.checked = addTask.checked
    div4.onclick = function () { onDeleteTask(i) }
    div4.innerHTML = 'delete'
    div5.onclick = function () { onEditTask(i) }
    div5.innerHTML = 'edit'
    div2.appendChild(div3)
    div2.appendChild(input2)
    div2.appendChild(div4)
    div2.appendChild(div5)
    taskContainer.appendChild(div2)

}

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
    allTasks[i].checked = editTaskChecked.checked
    saveTaskToLocalStorage()
}