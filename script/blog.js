//Calling the function
document.addEventListener('DOMContentLoaded', start)

function start() {
  //Binding visible
  var feeling = document.getElementById('feeling')
  feeling.addEventListener('click', handleVisibilityClick);

  //Binding options
  var options = document.getElementById('options')
  options.addEventListener('click', handleVisibilityClick);

  //Binding value
  var value = document.getElementById('value')
  value.addEventListener('click',handleVisibilityClick)

  //Binding operation
  var operators = document.getElementById('operators')
  operators.addEventListener('click',handleVisibilityClick)
}



// Event Handler by passing in event objects
function handleVisibilityClick(e) {
  var items = document.getElementById(e.target.id + "-items");

  if (items.classList.contains("visible")) {
    items.classList.remove("visible")
    items.classList.add("invisible");
  } else {
    items.classList.remove("invisible")
    items.classList.add("visible");
  }
}
