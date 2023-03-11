let stopButton = document.createElement('button');
stopButton.style.backgroundColor = 'red';
stopButton.style.position = 'fixed';
stopButton.style.top = '10px';
stopButton.style.left = '10px';
stopButton.textContent = 'Stop';
stopButton.onclick = stopClicks;

let startButton = document.createElement('button');
startButton.style.backgroundColor = 'green';
startButton.style.position = 'fixed';
startButton.style.top = '10px';
startButton.style.left = '80px';
startButton.textContent = 'Start';
startButton.onclick = startClicks;

document.body.appendChild(stopButton);
document.body.appendChild(startButton);

let clickingEnabled = true;

function clickButton() {
  if (clickingEnabled) {
    let button = document.querySelector('#s-1432688076 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div.recsCardboard__cardsContainer.H\\(100\\%\\).Pos\\(r\\).Z\\(1\\) > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button > span > span');

    if (button) {
      button.click();
      let delay = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000); // Generate a random delay between 3 and 10 seconds
      setTimeout(clickButton, delay);
    }
  }
}

function stopClicks() {
  clickingEnabled = false;
}

function startClicks() {
  clickingEnabled = true;
  clickButton();
}

clickButton();
