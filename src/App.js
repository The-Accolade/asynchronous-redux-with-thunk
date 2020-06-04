import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MovieDetails from './MovieDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Let's see a random movie!</h1>
          <MovieDetails />
        </div>
      </Provider>
    );
  }
}

export default App;
