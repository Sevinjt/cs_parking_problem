import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { createReduxContainer} from 'react-navigation-redux-helpers';
import AppWithNavigationState from './navigators/AppNavigator';
export default class App extends Component{
  render() {
  return (
    <Provider store={store}>
      <AppWithNavigationState listener={createReduxContainer('root')}/>    
      </Provider> 
  );
}
}

