import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet } from "react-native";
import ApartmentsView from "./views/apartments";
import ConfigView from "./views/config";

const Stack = createNativeStackNavigator();

export default function App() {
  const [baseUrl, setBaseUrl] = useState<string>("http://192.168.1.103:3000/");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Apartments">
        <Stack.Screen
          name="Apartments"
          options={{
            title: "Nawyish",
          }}
        >
          {(props) => <ApartmentsView {...props} baseUrl={baseUrl} />}
        </Stack.Screen>
        <Stack.Screen
          name="Config"
          options={{
            title: "Config",
          }}
        >
          {(props) => (
            <ConfigView {...props} baseUrl={baseUrl} setBaseUrl={setBaseUrl} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
