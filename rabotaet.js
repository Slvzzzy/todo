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
             allTasks.map((el,i) => {
                if (activeEditTaskIndex === i) {
                    const div1 = document.createElement('div'),
                          input = document.createElement('input'),
                          button = document.createElement('button')
                    input.setAttribute('id','inputText')
                    input.setAttribute('type', 'text')
                    input.setAttribute('value',el.text)
                    button.innerHTML = 'Apply'
                    button.setAttribute("onclick", editTask(${i}))
                    div1.appendChild(input)
                    div1.appendChild(button)
                    taskContainer.appendChild(div1)

                }
                else {
                    const div2 = document.createElement('div'),
                        div3 = document.createElement('div'),
                        div4 = document.createElement('div'),
                        div5 = document.createElement('div'),
                        input2 = document.createElement('input')
                    div3.innerHTML = `task: ${el.text}`
                    input2.setAttribute('onclick','editCheckBox')
                    input2.setAttribute('id', 'checkedStorage')
                    input2.setAttribute('type','checkbox')
                    input2.setAttribute('checked',el.checked)
                    div4.setAttribute("onclick", onDeleteTask(${i}))
                    div4.innerHTML = 'delete'
                    div5.setAttribute("onclick", onEditTask(${i}))
                    div5.innerHTML = 'edit'
                    div2.appendChild(div3)
                    div2.appendChild(input2)
                    div2.appendChild(div4)
                    div2.appendChild(div5)
                    taskContainer.appendChild(div2)

                }
            } )
            inputBox.value = '';
            saveTaskToLocalStorage()
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
    console.log(editTaskChecked.checked)
    allTasks[i].checked = editTaskChecked.checked
    console.log(editTaskChecked)
    saveTaskToLocalStorage()
}