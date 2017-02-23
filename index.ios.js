// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// import AppNavigator from './src/components/appNavigator';
import NewMatch from './src/components/NewMatch';

// Create a component
const App = () => {
  const { viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <NewMatch />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1
  }
};

// Render it to the device
AppRegistry.registerComponent('FBMS', () => App);
