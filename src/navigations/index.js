import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
//import AuthNavigator from './AuthNavigator';
//import HomeNavigator from './HomeNavigator';

const AppNavContainer = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

//

export default AppNavContainer;
