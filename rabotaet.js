'use strict'
const data = [];
const inputBox = document.getElementById("input-box"),
      taskContainer = document.querySelector(".container");
let activeEditTask;
const render = () => {
            const text = inputBox.value
            const newTask = {
                text,
                checked: true
            };
            data.push(newTask);
            taskContainer.innerHTML = data.map((el,i) => {
                    return`<div class="containerForTask"> 
            <div> task: ${el.text}  </div>
            <div onclick="onDeleteTask(${i})"> delete </div>
             <div onclick="onEditTask(${i})"> edit </div>
            </div>`
                }
            ).join('')
        inputBox.value = '';
}
const onDeleteTask = (i) => {
    data.splice(i,1)
    const deleteTask = document.querySelector(".containerForTask");
    deleteTask.remove()
    render()
}
console.log(data)

// if(activeEditTask === index) {
// //рисуем инпут и кнопку
//     const input = //
//         doneButton.onclick = () => {
//             updateTodo(index,  input.text)
//         }
// } else {
// //рисуем просто текст чекбокс и кнопки
// }
//
//
//
// const updateTodo = (text, index) => {
// //редактирование
//     render()
// }