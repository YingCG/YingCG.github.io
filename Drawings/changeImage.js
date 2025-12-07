function changeImage(button) {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "../images/Ican't.svg";
    } else {
      image.src = "../images/IcanDo.svg";
    }
    button.innerHTML = "I belive my learning ability"
  }

  