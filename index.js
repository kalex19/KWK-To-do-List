var btn = $('.submit-btn')
var container = $('.card-container')


btn.on("click", addToDo)

function addToDo() {
  var restInput = $('.resturant-input').val()
  var locInput = $('.location-input').val()
  container.append(`
    <p class="card">${restInput}, ${locInput}</p>`)
  $('.input').val("")
}

  