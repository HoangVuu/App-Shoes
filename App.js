/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProductDetail from './src/screens/ProductDetail';
import CardButton from './src/components/CartButton';
import Cart from './src/screens/Cart';
// import AppContainer from './src/navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/redux/reducers';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="login"
              options={{showLabel: true}}
              component={Login}
            />
            <Stack.Screen
              name="homescreen"
              component={HomeScreen}
              options={{headerRight: () => <CardButton />}}
            />
            <Stack.Screen
              name="productDetail"
              options={{showLabel: true}}
              initialParams={{item: {}}}
              component={ProductDetail}
            />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <AppContainer /> */}
      </Provider>
    </>
  );
};
export default App;
