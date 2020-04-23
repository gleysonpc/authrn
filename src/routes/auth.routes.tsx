import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "../pages/SignIn";

const AuthStack = createStackNavigator();

const AuthRouts: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRouts;
