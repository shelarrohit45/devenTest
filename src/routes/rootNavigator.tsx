import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import { Login } from "../screens/auth/login";
import { Register } from "../screens/auth/register";
import Dashboard from '../screens/pages/dashboard'
import { useIsFocused } from "@react-navigation/native";
import { RootState } from "../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import DrawerNavigator from "./drawerNavigator";

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};
const Navigation = () => {
  const [logstatus, setlogstatus] = useState("");
  const user = useSelector((state: RootState) => state.auth);
  const [hideSplash, setHideSplash] = React.useState(false);

  console.log("user", user.access_token);

  React.useEffect(() => {
    requestUserPermission();
  }, []);

  async function requestUserPermission() { }

  return (
    <NavigationContainer>
      {user.access_token == false ? (
        <Stack.Navigator
          headerMode="screen"
          mode="card"
          initialRouteName={"login"}
          screenOptions={() => ({
            ...TransitionPresets.SlideFromRightIOS,
            headerBackTitleVisible: false,
            headerTitleStyle: {
              marginTop: 2,
              fontFamily: "Poppins-Medium",
              fontSize: 16,
              marginRight: 50,
              marginLeft: -20,
            },
            headerStyle: { shadowColor: "#000", elevation: 10 },
          })}
        >
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
          <Stack.Navigator
            headerMode="screen"
            mode="card"
            initialRouteName={"drawer"}
            screenOptions={() => ({
              ...TransitionPresets.SlideFromRightIOS,
              headerBackTitleVisible: false,
              headerTitleStyle: {
                marginTop: 2,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
                marginRight: 50,
                marginLeft: -20,
              },
              headerStyle: { shadowColor: "#000", elevation: 10 },
            })}
          >
            <Stack.Screen
              name="drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
           
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
}

export default Navigation;
