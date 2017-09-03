import React, { Component } from 'react';

import LandingPageContainer from './landing_page_components/LandingPageContainer'
import * as api from './common/apiCalls';

class App extends Component {

  render() {
    return (
      <div>
        <LandingPageContainer />
      </div>
    );
  }
}

export default App;
