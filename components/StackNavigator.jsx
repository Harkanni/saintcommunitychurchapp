import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Events, Blog } from '../screens';
import Prayer from '../screens/Prayer';

const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => (
   <Stack.Navigator initialRouteName='Home'>
     <Stack.Screen
       name='Home'
       component={Home}
       options={{ headerShown: false }}
     />
     <Stack.Screen
       name='Event'
       component={Events}
       options={{ headerShown: false }}
     />
     <Stack.Screen
       name='Blog'
       component={Blog}
       options={{ headerShown: false }}
     />
     <Stack.Screen
       name='Prayer'
       component={Prayer}
       options={{ headerShown: false }}
     />
   </Stack.Navigator>
 );

export default HomeStackNavigator