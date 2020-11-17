document.addEventListener("keydown", function (e) {
  if (e.code == 'KeyA') {
    const sound = new Audio("white_keys/A.mp3");
    sound.play();
  } else if (e.code == 'KeyS') {
    const sound = new Audio("white_keys/S.mp3");
    sound.play();
  } else if (e.code == 'KeyD') {
    const sound = new Audio("white_keys/D.mp3");
    sound.play();
  } else if (e.code == 'KeyF') {
    const sound = new Audio("white_keys/F.mp3");
    sound.play();
  } else if (e.code == 'KeyG') {
    const sound = new Audio("white_keys/G.mp3");
    sound.play();
  } else if (e.code == 'KeyH') {
    const sound = new Audio("white_keys/H.mp3");
    sound.play();
  } else if (e.code == 'KeyJ') {
    const sound = new Audio("white_keys/J.mp3");
    sound.play();
  } else if (e.code == 'KeyW') {
    const sound = new Audio("black_keys/W.mp3");
    sound.play();
  } else if (e.code == 'KeyE') {
    const sound = new Audio("black_keys/E.mp3");
    sound.play();
  } else if (e.code == 'KeyT') {
    const sound = new Audio("black_keys/T.mp3");
    sound.play();
  } else if (e.code == 'KeyY') {
    const sound = new Audio("black_keys/Y.mp3");
    sound.play();
  } else if (e.code == 'KeyU') {
    const sound = new Audio("black_keys/U.mp3");
    sound.play();
  } else {
    console.log("Unbound key pressed;")
  }
})