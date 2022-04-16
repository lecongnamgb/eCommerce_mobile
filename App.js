import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './components/Navigator/BottomNavigation'
import {View} from 'react-native'

export default function App() {
  return (
        <NavigationContainer independent = {true}>
            <BottomNavigation/>
        </NavigationContainer>
  );
}