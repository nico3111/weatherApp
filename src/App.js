import React from 'react';
import Head from './components/Head';
import ShowWeather from './components/ShowWeather';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: "",
    };
  }



  render() {

    return (
      <div>
        {this.state.city === "" && <Head />}
        {this.state.city !== "" && <ShowWeather city={this.state.city} />}
      </div>
    );
  }
}

export default App;
