var actionCounter=0;
var carbonCount= 0;
let toggled = false;
let progressBarWidth = 0;



// let currentCount = document.getElementsByClassName('current-carbon-count');
// currentCount[0].innerHTML = `${carbonCount}`


function toggleAction1() {
  let action1 = document.getElementsByClassName('imgAction1')
  let action1Toggled = document.getElementsByClassName('imgAction1Toggled')
  let progressBar = document.getElementsByClassName('activated-bar')
  let barProgress = 1000 / 13000 * 100;
  if (toggled === false) {
    action1[0].style.display = 'none';
    action1Toggled[0].style.display = 'inline';
    carbonCount += 1000;
    progressBarWidth = progressBarWidth + barProgress
    progressBar[0].style.width = `${progressBarWidth}%`;

  }
  if (toggled === true) {
    carbonCount -= 1000
    action1[0].style.display = 'inline';
    action1Toggled[0].style.display = 'none';
    progressBarWidth = progressBarWidth - barProgress
    progressBar[0].style.width = `${progressBarWidth}%`;

  }
  toggled = !toggled;

}

let toggled2 = false;
function toggleAction2 () {
  let action2 = document.getElementsByClassName('imgAction2');
  let action2Toggled = document.getElementsByClassName('imgAction2Toggled');
  let progressBar = document.getElementsByClassName('activated-bar')
  let barProgress = 3000 / 13000 * 100;
  if (toggled2 === false) {
    carbonCount += 3000
    action2[0].style.display = 'none';
    action2Toggled[0].style.display = 'inline';
    progressBarWidth = progressBarWidth + barProgress
    progressBar[0].style.width = `${progressBarWidth}%`;
  }
  if (toggled2 === true) {
    action2[0].style.display = 'inline';
    action2Toggled[0].style.display = 'none';
    carbonCount -= 3000;
    progressBarWidth = progressBarWidth - barProgress
    progressBar[0].style.width = `${progressBarWidth}%`;
  }
  toggled2 = !toggled2;
}


let toggled3 = false;
function toggleAction3() {
  let action3 = document.getElementsByClassName('imgAction3')
  let action3Toggled = document.getElementsByClassName('imgAction3Toggled');
  let progressBar = document.getElementsByClassName('activated-bar');
  let barProgress = 4000 / 13000 * 100;
if (toggled3 === false) {
  carbonCount += 4000
  action3[0].style.display = 'none';
  action3Toggled[0].style.display = 'inline';
  progressBarWidth = progressBarWidth + barProgress
  progressBar[0].style.width = `${progressBarWidth}%`;
  }
  if (toggled3 === true) {
  action3[0].style.display = 'inline';
  action3Toggled[0].style.display = 'none';
  carbonCount -= 4000;
  progressBarWidth = progressBarWidth - barProgress;
  progressBar[0].style.width = `${progressBarWidth}%`;
  }
  toggled3 = !toggled3;
}


let toggled4 = false;
function toggleAction4() {

  let action4 = document.getElementsByClassName('imgAction4')
  let action4Toggled = document.getElementsByClassName('imgAction4Toggled');
  let progressBar = document.getElementsByClassName('activated-bar');
  let barProgress = 5000 / 13000 * 100;
if (toggled4 === false) {
  carbonCount += 5000
  action4[0].style.display = 'none';
  action4Toggled[0].style.display = 'inline';
  progressBarWidth = progressBarWidth + barProgress
  progressBar[0].style.width = `${progressBarWidth}%`;
  }
  if (toggled4 === true) {
  action4[0].style.display = 'inline';
  action4Toggled[0].style.display = 'none';
  carbonCount -= 5000;
  progressBarWidth = progressBarWidth - barProgress;
  progressBar[0].style.width = `${progressBarWidth}%`;
  }
  toggled4 = !toggled4;
}

function playSound() {
  actionCounter++
  if (actionCounter === 1) {
    var soundAction1 = new Audio("lib/sounds/1action.mp3")
    soundAction1.play()
  }
  if (actionCounter === 2) {
    var soundAction2 = new Audio("lib/sounds/2actions.mp3")
    soundAction2.play()
  }
  if (actionCounter === 3) {
    var soundAction3 = new Audio("lib/sounds/3actions.mp3")
    soundAction3.play()
  }
  if (actionCounter === 4) {
    var soundAction4 = new Audio("lib/sounds/4actions.mp3")
    soundAction4.play()
  }
  console.log(actionCounter)
}

function playDeselect() {
  var deselect = new Audio("lib/sounds/deselect.mp3")
    deselect.play()
    actionCounter--;
    console.log(actionCounter)
}

function carbonCounter () {
  let action1Topper = document.getElementsByClassName('action1Counter');
  let counterWrap = document.getElementsByClassName('counter-wrapper');
  let signButton = document.getElementsByClassName('sign-button');
  let currentCount = document.getElementsByClassName('current-carbon-count');
  let progressBar = document.getElementsByClassName('activated-bar');
  if (actionCounter === 0) {
    action1Topper[0].style.display = 'none';
    signButton[0].style.display = 'none';
    counterWrap[0].style.display = 'none';
    currentCount[0].innerHTML = `0000`;
    progressBar[0].style.width = `0%`;
  }

  if (actionCounter === 1) {
    action1Topper[0].style.display = 'inline';
    signButton[0].style.display = 'inline';
    counterWrap[0].style.display = 'flex';
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`;
    currentCount[0].innerHTML = `${carbonCount}`;

  }
  if (actionCounter === 2) {
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`;
    currentCount[0].innerHTML = `${carbonCount}`;
  }
  if (actionCounter === 3) {
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`;
    currentCount[0].innerHTML = `${carbonCount}`
  }
  if (actionCounter === 4) {
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`;
    currentCount[0].innerHTML = `${carbonCount}`
    console.log(carbonCount)
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  let backgroundPopup = document.getElementsByClassName("background-overlay");
  
  backgroundPopup[0].style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
var image1Activation = false
 function checkimg1() {
  let img1Title = document.getElementsByClassName('action-1-title')
   if (image1Activation === false) {
    img1Title[0].style.background = '#72A83D'
     toggleAction1();
     playSound();
     carbonCounter();
  } else if (image1Activation === true) {
    img1Title[0].style.background = '#56A1B8'
     toggleAction1();
     playDeselect();
     carbonCounter();
   }
   image1Activation = !image1Activation
}

var image2Activation = false
 function checkimg2() {
  let img2Title = document.getElementsByClassName('action-2-title')
   if (image2Activation === false) {
    img2Title[0].style.background = '#72A83D'
     toggleAction2();
     playSound();
     carbonCounter();
  } else if (image2Activation === true) {
    img2Title[0].style.background = '#BB4832'
     toggleAction2();
     playDeselect();
     carbonCounter();
   }
   image2Activation = !image2Activation
}

var image3Activation = false
 function checkimg3() {
  let img3Title = document.getElementsByClassName('action-3-title')
   if (image3Activation === false) {
     img3Title[0].style.background = '#72A83D'
     toggleAction3();
     playSound();
     carbonCounter();
  } else if (image3Activation === true) {
     img3Title[0].style.background = '#425FAB'
     toggleAction3();
     playDeselect();
     carbonCounter();
   }
   image3Activation = !image3Activation
}

var image4Activation = false
 function checkimg4() {
   let img4Title = document.getElementsByClassName('action-4-title')
   if (image4Activation === false) {
     img4Title[0].style.background = '#72A83D'
     toggleAction4();
     playSound();
     carbonCounter();
  } else if (image4Activation === true) {
    img4Title[0].style.background = '#CDBA3D'
     toggleAction4();
     playDeselect();
     carbonCounter();
   }
   image4Activation = !image4Activation
}

function closePopup () {
  let closeButton = document.getElementsByClassName('form-popup')
  closeButton[0].style.display = 'none';
  let backgroundPopup = document.getElementsByClassName("background-overlay");
  backgroundPopup[0].style.display = "none";

}

function counterForm () {
  let popupCounter = document.getElementsByClassName('popup-counter')
  popupCounter[0].innerHTML = `${carbonCount}`
  let counterBarForm = document.getElementsByClassName('carbon-bar-popup2')
  counterBarForm[0].style.width = `${progressBarWidth}%`
}