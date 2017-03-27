import React from 'react';
import Keys from './Keys';
import Samples from './Sounds.js';
import './drumkit.css';


class Drumkit extends React.Component {
  constructor() {
    super();
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getSound = this.getSound.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.getKeyByKeyCode = this.getKeyByKeyCode.bind(this);
    this.updatePlayClass = this.updatePlayClass.bind(this);

  }

  // getinitialstate
  state = {
    keymaps : {},
  };

  componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
      this.loadSamples();
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    event.preventDefault();
    const key = this.getKeyByKeyCode(event.keyCode);

    if (!key) return;

    const sound = this.getSound(key);

    this.playSound(sound);
    this.updatePlayClass(key);
  }

  getSound(key) {
    const keymaps = {...this.state.keymaps};
    return (keymaps[key]) ? './sounds/' + keymaps[key].name + keymaps[key].ext : false;
  }

  getKeyByKeyCode(keyCode) {
    const keymaps = {...this.state.keymaps};
    return Object.keys(keymaps).find(key => keymaps[key].keycode === keyCode);
  }

  updatePlayClass(key) {
    const keymaps = {...this.state.keymaps};
    keymaps[key].className = 'playing';
    this.setState({ keymaps });
    keymaps[key].className = '';
    setTimeout(() => {this.setState({ keymaps })}, 150);
  }

  playSound(sound) {
    let audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play();
  }

  loadSamples = () => {
    const keymaps = Samples;
    Object.keys(keymaps).map(key => Samples[key].className = '');
    this.setState({ keymaps });
  }; // don't foreget the semi for new ES feature.


  render() {
    return(
      <div className="drumkit">
        <div className="keys">
          {
            Object.keys(this.state.keymaps)
            .map(key => <Keys key={key} map={this.state.keymaps[key]} index={key} className={this.state.keymaps[key].className} />)
          }
        </div>
      </div>
    )
  }
}

export default Drumkit;
