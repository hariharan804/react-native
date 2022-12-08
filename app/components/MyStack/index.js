import {createStackNavigator} from '@react-navigation/stack';
import Intermediate from '../../screens/intermediate';
import ServiceDetails from '../../screens/serviceDetails';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Group>
        <Stack.Screen name="Home" component={ServiceDetails} />
        <Stack.Screen name="Intermediate" component={Intermediate} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default MyStack;
