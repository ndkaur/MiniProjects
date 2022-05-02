var numOfb = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfb ;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
        switch(key){
            case "w":
                var s1= new Audio("sounds/tom-1.mp3");
                s1.play();
                break;
            
            case "a":
                var s2= new Audio("sounds/tom-2.mp3");
                s2.play();
                break;
            
            case "s":
                var s3= new Audio('sounds/tom-3.mp3');
                s3.play();
                break;
            
            case "d":
                var s4= new Audio('sounds/tom-4.mp3');
                s4.play();
                break;
            
            case "j":
                var s5 = new Audio('sounds/snare.mp3');
                s5.play();
                break;
            
            case "k":
                var s6 = new Audio('sounds/crash.mp3');
                s6.play();
                break;
            
            case "l":
                var s7 = new Audio('sounds/kick-bass.mp3');
                s7.play();
                break;

            default: console.log(key);
        }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");}, 100);
}


