import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss} from 'react-router';

import GamePicker from './components/GamePicker';
import Drumkit from './components/Drumkit';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={GamePicker} />
        <Match pattern="/drumkit" component={Drumkit} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
