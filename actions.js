var actionCounter=0;
var carbonCount= 0;
let toggled = false;

function toggleAction1() {
  let action1 = document.getElementsByClassName('imgAction1')
  let action1Toggled = document.getElementsByClassName('imgAction1Toggled')
  if (toggled === false) {
    action1[0].style.display = 'none';
    action1Toggled[0].style.display = 'inline';
    carbonCount += 1000
  }
  if (toggled === true) {
    carbonCount -= 1000
    action1[0].style.display = 'inline';
    action1Toggled[0].style.display = 'none';
    
    console.log(carbonCount)
  }
  toggled = !toggled;
  
}

let toggled2 = false;
function toggleAction2 () {
  let action2 = document.getElementsByClassName('imgAction2')
  let action2Toggled = document.getElementsByClassName('imgAction2Toggled')
  if (toggled2 === false) {
    carbonCount += 3000
    action2[0].style.display = 'none';
    action2Toggled[0].style.display = 'inline';
  }
  if (toggled2 === true) {
    action2[0].style.display = 'inline';
    action2Toggled[0].style.display = 'none';
    carbonCount -= 3000
  }
  toggled2 = !toggled2;
}


let toggled3 = false;
function toggleAction3() {
  let action3 = document.getElementsByClassName('imgAction3')
  let action3Toggled = document.getElementsByClassName('imgAction3Toggled')
if (toggled3 === false) {
  carbonCount += 4000
  action3[0].style.display = 'none';
  action3Toggled[0].style.display = 'inline';
  }
  if (toggled3 === true) {
  action3[0].style.display = 'inline';
  action3Toggled[0].style.display = 'none';
  carbonCount -= 4000
  }
  toggled3 = !toggled3;
}


let toggled4 = false;
function toggleAction4() {
  
  let action4 = document.getElementsByClassName('imgAction4')
  let action4Toggled = document.getElementsByClassName('imgAction4Toggled')
if (toggled4 === false) {
  carbonCount += 5000
  action4[0].style.display = 'none';
  action4Toggled[0].style.display = 'inline';
  }
  if (toggled4 === true) {
  action4[0].style.display = 'inline';
  action4Toggled[0].style.display = 'none';
  carbonCount -= 5000
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
}

function playDeselect() {
  var deselect = new Audio("lib/sounds/deselect.mp3")
    deselect.play()
    actionCounter--;
}

function carbonCounter () {
  let action1Topper = document.getElementsByClassName('action1Counter');
  let counterWrap = document.getElementsByClassName('counter-wrapper');
  let signButton = document.getElementsByClassName('sign-button');
  if (actionCounter === 0) {
    action1Topper[0].style.display = 'none';
    signButton[0].style.display = 'none';
    counterWrap[0].style.display = 'none';
  }

  if (actionCounter === 1) {
    action1Topper[0].style.display = 'inline';
    signButton[0].style.display = 'inline';
    counterWrap[0].style.display = 'flex';
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`
    console.log(carbonCount)
    
  }
  if (actionCounter === 2) {
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`
    console.log(carbonCount)
  }
  if (actionCounter === 3) {
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`
    console.log(carbonCount)
  }
  if (actionCounter === 4) {
    action1Topper[0].innerHTML = `Total Carbon Avoided ${carbonCount}`
    console.log(carbonCount)
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

