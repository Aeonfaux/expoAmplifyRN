/** @format */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import HomePage from './src/components/HomePage';
import reducers from './src/reducers';
import { AppRegistry } from 'react-native';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <HomePage />
      </Provider>
    );
  }

}

AppRegistry.registerComponent('myAmplifyProject', () => App)
