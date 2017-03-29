import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import GamePicker from './components/GamePicker';
import Drumkit from './components/drumkit/Drumkit';
import Clock from './components/clock/Clock';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={GamePicker} />
        <Match exactly pattern="/drumkit" component={Drumkit} />
        <Match exactly pattern="/clock" component={Clock} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
