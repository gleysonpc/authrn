import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Dashborad from "../pages/Dasboard";

const AppStack = createStackNavigator();

const AppRouts: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashborad} />
  </AppStack.Navigator>
);

export default AppRouts;
