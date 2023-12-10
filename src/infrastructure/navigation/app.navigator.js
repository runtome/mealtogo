import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { NavigationContainer } from "@react-navigation/native"

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsScreen } from "../../features/restaurants/screen/restaurants.screen";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
                {
                  display: "flex",
                },
                null,
              ],
  };
};

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
);
