import React, { Component } from 'react';

import LandingPageContainer from './landing_page_components/LandingPageContainer'
import * as api from './common/apiCalls';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      session: null,
    }
  }

  componentWillMount(){
    // this.setState({session: api.getSession("logtheman@gmail.com")})
  }

  render() {
    console.log("session", this.state.session);
    return (
      <div>
        <LandingPageContainer session={this.state.session}/>
      </div>
    );
  }
}

export default App;
