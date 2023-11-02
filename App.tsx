import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/pages/Welcome/WelcomeScreen";
import TabNavigation from "./src/layouts/TabNavigation";
import LoginScreen from "./src/pages/Login/LoginScreen";
import RegisterScreen from "./src/pages/Register/RegisterScreen";
import OTPScreen from "./src/pages/OTP/OTPScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen
            name="MainScreen"
            component={TabNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}