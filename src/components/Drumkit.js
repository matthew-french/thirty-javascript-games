import React from 'react';

class Drumkit extends React.Component {
  render() {
    return(
      <div className="drumkit">
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
      </div>
    )
  }
}

export default Drumkit;
