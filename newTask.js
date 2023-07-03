'use strict'
const data = [
    {src: 'путь к картинке', text: 'google', isRussian: false },
    {src: 'путь к картинке', text: 'facebook', isRussian: false },
    {src: 'путь к картинке',text: 'telegram',isRussian: true},
]
let activeEditTask;
const divElem = document.querySelectorAll('.dataName');
divElem.innerHTML = data.map((el,i) => {

})
const render = () => {
const container = document.querySelector('.dataName')
allTasks.map((task, index) => {

        const editButton = //
            editButton.onClick = () => {
                activeEditTask = index;
                render()
            }
    }
)
const deleteButton = //
deleteButton.onClick = () => {
deleteTodo(index)
}
if(activeEditTask === index) {
//рисуем инпут и кнопку
const input = //
doneButton.onclick = () => {
updateTodo(index,  input.text)
}
} else {
//рисуем просто текст чекбокс и кнопки
}



const updateTodo = (text, index) => {
//редактирование
render()
}

const deleteTodo = (index) => {
    data.splice(index,1)
render()
}
}