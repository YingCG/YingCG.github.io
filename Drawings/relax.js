var container = document.querySelector('.breathExercise')
var text = document.querySelector('#text')

var totalTime = 7500
var breathTime = (totalTime / 5) * 2
var holdTime = totalTime / 5

breathAnimation()

function breathAnimation(){
    text.innerHTML = 'Breath In'
    container.className = 'container grow'

    setTimeout(() =>{
        text.innerHTML = 'Hold'

        setTimeout(() =>{
            text.innerHTML = 'Breath Out'
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime)

}

setInterval(breathAnimation,totalTime)