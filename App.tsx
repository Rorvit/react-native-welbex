import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import VehicleScreen from './src/screens/VehicleScreen';
import 'react-native-dotenv/config';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Список ТС' }} />
        <Stack.Screen
          name="Vehicle"
          component={VehicleScreen}
          options={{ title: 'Информация о ТС' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
