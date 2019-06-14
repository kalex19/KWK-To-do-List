var btn = $('.submit-btn')
var input = $('.input').val()
var container = $('.todo-container')


btn.on('click', addTodo)

function addToDo() {
  container.append(`
    <i class = "far fa-circle"></i>
    <p class = "card">${input} </p>`)

$('.input').val("")

}
  