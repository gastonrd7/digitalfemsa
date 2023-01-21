import React, { useState } from 'react';
import { Provider } from 'react-redux';
import generateStore from './src/store';
import Home from './src/components/home';
import ProductDetail from './src/components/productDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
const AvenirBlack = require("./fonts/AvenirBlack.ttf");
import AppLoading from 'expo-app-loading';


const fetchFonts = () =>
  Font.loadAsync({
    'Avenir-Black': AvenirBlack,
});


const Stack = createNativeStackNavigator();

export default function App() {

  const store = generateStore();
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
      <Provider store={store}> 
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}
            options={() => ({
              headerShown: false,
            })} 
            />
            <Stack.Screen name="Product" component={ProductDetail}
            options={() => ({
              headerShown: false,
            })} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};