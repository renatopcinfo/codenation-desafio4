import React from 'react';
import Profile from './src/screens/Profile';
import Acceleration from './src/screens/Acceleration';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createStackNavigator({
  Acceleration: Acceleration,
  Profile: Profile
})

const App = createAppContainer(Routes);

export default App;
