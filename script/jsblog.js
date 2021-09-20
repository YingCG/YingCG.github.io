//Calling the function
document.addEventListener('DOMContentLoaded', start)

function start() {

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