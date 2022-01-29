
var numberOfButtons = document.querySelectorAll(".drum").length;

for( var i = 0; i < numberOfButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
var innerHtml = this.innerHTML;
makeSound(innerHtml);

});
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key)
});

  function makeSound(key) {
    switch (key) {
      case "w":
      var wa= new Audio("sounds/tom-4.mp3");
      wa.play();
        break;
      case "a":
      var au= new Audio("sounds/tom-3.mp3");
      au.play();
        break;
      case "s":
      var dio= new Audio("sounds/tom-2.mp3");
      dio.play();
        break;
      case "d":
      var io= new Audio("sounds/tom-1.mp3");
      io.play();
        break;
        case "j":
        var asd= new Audio("sounds/snare.mp3");
        asd.play();
          break;
      case "k":
      var da= new Audio("sounds/crash.mp3");
      da.play();
        break;
     case "l":
     var op= new Audio("sounds/kick-bass.mp3");
     op.play();
       break;
      default:

    }

  }
