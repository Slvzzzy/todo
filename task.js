'use strict'
const data = [
    {src: 'путь к картинке', text: 'google', isRussian: false },
    {src: 'путь к картинке', text: 'facebook', isRussian: false },
    {src: 'путь к картинке',text: 'telegram',isRussian: true}
]
const renderMas = () => {
    const divElem = document.querySelector('.dataName');
    divElem.innerHTML = data.map((el,i) => {
    return`<div>
      <div>src: ${el.src}</div>
      <div>text: ${el.text}</div>
      <div>isRussian: ${el.isRussian}</div>
      <div onclick="onDeleteTask(${i})"> button </div>
      <div onclick="onEditTask(${i})"> edit </div>
    </div>`
    }).join('')}
renderMas()
const onDeleteTask = (i) => {
    data.splice(i,1)
    renderMas()
}


