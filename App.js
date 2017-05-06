import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './utils/store';

import HomeScreen from './screens/home';

const Navigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends Component {
  componentDidMount() {
    store.dispatch({
      type: 'FETCH_POST',
      payload: { id: 1 },
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
