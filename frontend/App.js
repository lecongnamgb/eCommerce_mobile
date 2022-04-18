import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './components/Navigator/BottomNavigation'
import {View} from 'react-native'
import LogInScreen from './screens/LogInScreen';

export default function App() {
  return (
        <NavigationContainer independent = {true}>
            <BottomNavigation/>
        </NavigationContainer>
  );
}