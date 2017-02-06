import render from './Render';
import sounds from './Sounds';


const template = `
<div class="keys">
  <div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
  </div>
  <div data-key="83" class="key">
    <kbd>S</kbd>
    <span class="sound">hihat</span>
  </div>
  <div data-key="68" class="key">
    <kbd>D</kbd>
    <span class="sound">kick</span>
  </div>
  <div data-key="70" class="key">
    <kbd>F</kbd>
    <span class="sound">openhat</span>
  </div>
  <div data-key="71" class="key">
    <kbd>G</kbd>
    <span class="sound">boom</span>
  </div>
  <div data-key="72" class="key">
    <kbd>H</kbd>
    <span class="sound">ride</span>
  </div>
  <div data-key="74" class="key">
    <kbd>J</kbd>
    <span class="sound">snare</span>
  </div>
  <div data-key="75" class="key">
    <kbd>K</kbd>
    <span class="sound">tom</span>
  </div>
  <div data-key="76" class="key">
    <kbd>L</kbd>
    <span class="sound">tink</span>
  </div>
</div>

<audio data-key="65" src="./assets/clap.wav"></audio>
<audio data-key="83" src="./assets/hihat.wav"></audio>
<audio data-key="68" src="./assets/kick.wav"></audio>
<audio data-key="70" src="./assets/openhat.wav"></audio>
<audio data-key="71" src="./assets/boom.wav"></audio>
<audio data-key="72" src="./assets/ride.wav"></audio>
<audio data-key="74" src="./assets/snare.wav"></audio>
<audio data-key="75" src="./assets/tom.wav"></audio>
<audio data-key="76" src="./assets/tink.wav"></audio>
`

const removeTransition = function(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const playSound = function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;

  audio.play();
}

export default function(){
  render(template,'app');
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
}
