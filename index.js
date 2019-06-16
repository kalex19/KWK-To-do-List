var btn = $('.submit-btn')
var container = $('.card-container')

window.onload= function getLocalStorage() {
    var resturant = JSON.parse(localStorage.getItem('resturant'))
    var location = JSON.parse(localStorage.getItem('location'))
   container.append(`
    <p class="card">${resturant}, ${location}</p>`)
}

btn.on("click", addToDo)

function addToDo() {
  var restInput = $('.resturant-input').val()
  var locInput = $('.location-input').val()
  container.append(`
    <p class="card">${restInput}, ${locInput}</p>`)
  $('.input').val("")
  localStorage.setItem('resturant', JSON.stringify(restInput))
  localStorage.setItem('location', JSON.stringify(locInput))
  var resturant = JSON.parse(localStorage.getItem('resturant'))
  var location = JSON.parse(localStorage.getItem('location'))
}

  