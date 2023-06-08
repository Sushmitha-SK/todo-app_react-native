import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDo from './components/ToDo';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ToDo' component={ToDo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

