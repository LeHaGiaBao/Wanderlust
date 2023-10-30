import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/pages/Welcome/WelcomeScreen";
import TabNavigation from "./src/layouts/TabNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          {/* <Stack.Screen
            name="Tab"
            component={TabNavigation}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}