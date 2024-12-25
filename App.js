import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Ekranları import etme
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import DetailScreen from "./screens/DetailScreen";
import FlightScreen from "./screens/FlightScreen";
import TrainScreen from "./screens/TrainScreen";
import BusScreen from "./screens/BusScreen";
import TaxiScreen from "./screens/TaxiScreen";
import HotelScreen from "./screens/HotelScreen";
import AdventureScreen from "./screens/AdventureScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ title: "Explore" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="Flight"
          component={FlightScreen}
          options={{ title: "Flight" }}
        />
        <Stack.Screen
          name="Train"
          component={TrainScreen}
          options={{ title: "Train" }}
        />
        <Stack.Screen
          name="Bus"
          component={BusScreen}
          options={{ title: "Bus" }}
        />
        <Stack.Screen
          name="Taxi"
          component={TaxiScreen}
          options={{ title: "Taxi" }}
        />
        <Stack.Screen
          name="Hotel"
          component={HotelScreen}
          options={{ title: "Hotel" }}
        />
        <Stack.Screen
          name="Adventure"
          component={AdventureScreen}
          options={{ title: "Adventure" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
