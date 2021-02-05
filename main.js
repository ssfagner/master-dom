
const keys = document.querySelectorAll('.key')



function playNote(event) {

  let audiokeyCode = getKeyCode(event);

  const key = document.querySelector(`.key[data-key="${audiokeyCode}"]`)

  const cantFoundAndKey = !key;

  if(cantFoundAndKey) {
    return;
  } 
  addPlayingClass(key)
  playAudio(audiokeyCode)
  
}



function addPlayingClass(key) {
  key.classList.toggle('playing')
}



function getKeyCode(event) {
  
  let keyCode;

  const isKeyboard = event.type === 'keydown'

  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }
  return keyCode
}

function playAudio(audiokeyCode) {
  const audio = document.querySelector(`audio[data-key="${audiokeyCode}"]`)
  
  audio.currentTime = 0;
  audio.play();
}

function removePlayingClass(event) {
  event.target.classList.remove('playing')
}



keys.forEach( function(key)   {
  key.addEventListener('click', playNote)
  key.addEventListener('transitionend', removePlayingClass)
})


window.addEventListener('keydown', playNote)