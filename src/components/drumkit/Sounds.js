export default function() {
  // require('../assets/sounds/clap.wav');
  // require('../assets/sounds/hihat.wav');
  // require('../assets/sounds/kick.wav');
  // require('../assets/sounds/openhat.wav');
  // require('../assets/sounds/boom.wav');
  // require('../assets/sounds/ride.wav');
  // require('../assets/sounds/snare.wav');
  // require('../assets/sounds/tom.wav');
  // require('../assets/sounds/tink.wav');
  require.context('../assets/sounds/', true, /^\.\/.*\.wav/);
}
