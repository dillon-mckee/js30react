import React from 'react';

class DrumKit extends React.Component {

    componentWillMount = () => {
      window.addEventListener('keydown', this.handleKeyDown);
    }

    componentDidMount = () => {
      const keys = Array.from(document.querySelectorAll('.key'));
      keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
    }

    componentWillUnmount = () => {
      window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
      console.log(key)
      if(!audio) return;
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play()
    }

    removeTransition = (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }

    render(){

    return (
        <div className="keys">
            <div data-key="65" className="key">
              <kbd>A</kbd>
              <span className="sound">clap</span>
            </div>
            <div data-key="83" className="key">
              <kbd>S</kbd>
              <span className="sound">hihat</span>
            </div>
            <div data-key="68" className="key">
              <kbd>D</kbd>
              <span className="sound">kick</span>
            </div>
            <div data-key="70" className="key">
              <kbd>F</kbd>
              <span className="sound">openhat</span>
            </div>
            <div data-key="71" className="key">
              <kbd>G</kbd>
              <span className="sound">boom</span>
            </div>
            <div data-key="72" className="key">
              <kbd>H</kbd>
              <span className="sound">ride</span>
            </div>
            <div data-key="74" className="key">
              <kbd>J</kbd>
              <span className="sound">snare</span>
            </div>
            <div data-key="75" className="key">
              <kbd>K</kbd>
              <span className="sound">tom</span>
            </div>
            <div data-key="76" className="key">
              <kbd>L</kbd>
              <span className="sound">tink</span>
            </div>
            <audio data-key="65" src="assets/sounds/clap.wav"></audio>
            <audio data-key="83" src="assets/sounds/hihat.wav"></audio>
            <audio data-key="68" src="assets/sounds/kick.wav"></audio>
            <audio data-key="70" src="assets/sounds/openhat.wav"></audio>
            <audio data-key="71" src="assets/sounds/boom.wav"></audio>
            <audio data-key="72" src="assets/sounds/ride.wav"></audio>
            <audio data-key="74" src="assets/sounds/snare.wav"></audio>
            <audio data-key="75" src="assets/sounds/tom.wav"></audio>
            <audio data-key="76" src="assets/sounds/tink.wav"></audio>
        </div>
        );
    }
};

export default DrumKit;
