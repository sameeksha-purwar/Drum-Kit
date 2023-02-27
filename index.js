
var numberofDrum=document.querySelectorAll('.drum').length
for(var i=0;i<numberofDrum;i++){
document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    audioPlay(this.innerHTML)
    buttonAnimation(this.innerHTML)
})

}

document.addEventListener("keypress",function(event){
    audioPlay(event.key)
    buttonAnimation(event.key)
})
function audioPlay(key){
    switch (key) {
        case "p":
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
        case "u":
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play()
            break;
        case "r":
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play()
            break;
        case "w":
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play()
            break;
        case "u":
            var audio=new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case "a":
            var audio=new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case "m":
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play()
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3")
            audio.play()
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var Addanimation=document.querySelector("."+currentKey)
    Addanimation.classList.add("pressed")

    setTimeout(function(){
        Addanimation.classList.remove("pressed")
    },100)
}
