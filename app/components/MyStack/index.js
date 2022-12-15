import {createStackNavigator} from '@react-navigation/stack';
import Intermediate from '../../screens/intermediate';
import IssuesDetails from '../../screens/issuesDetails';
import IssuesList from '../../screens/issuesList';
import ServiceDetails from '../../screens/serviceDetails';
const Stack = createStackNavigator();

function MyStack() {
  const option = {headerShown: false};
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="IssuesList"
          options={option}
          component={IssuesList}
        />
          <Stack.Screen
          name="IssuesDetails"
          options={option}
          component={IssuesDetails}
        />
        <Stack.Screen name="Home" options={option} component={ServiceDetails} />
        <Stack.Screen name="Intermediate" component={Intermediate} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default MyStack;
