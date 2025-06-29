import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import FoodsMenu from './src/pages/FoodsMenu';
import DrinkMenu from './src/pages/DrinkMenu';
import PastriesMenu from './src/pages/PastriesMenu';
import OrderHistory from './src/pages/OrderHistory';
import Profile from './src/pages/Profile';
import Confirmation from './src/pages/confirmation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodsMenu"
          component={FoodsMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrinkMenu"
          component={DrinkMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PastriesMenu"
          component={PastriesMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;