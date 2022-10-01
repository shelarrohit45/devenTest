import React from "react";
import { View, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { theme } from "../helpers/theme";
import Menu from '../../assets/icons/menu'
import Dashboard from '../screens/pages/dashboard'
import CustomSidebarMenu from "./CustomSidebarMenu";
const { colors } = theme;

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      backBehavior="initialRoute"
      lazy={true}
      overlayColor={colors.transparentWhite}
      drawerStyle={{
        backgroundColor: "transparent",
        height: "100%",
        width: "80%",
      }}
      screenOptions={() => ({
        headerTitleStyle: {
          fontFamily: "Poppins-Medium",
          marginTop: 2,
          fontSize: 16,
          marginRight: 50,
          marginLeft: -20,
        },
        headerStyle: { shadowColor: "#000", elevation: 10 },
      })}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }) => ({
          title: "Dashboard",
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "transparent",
            paddingHorizontal:10
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerLeft: () => (
            <Pressable style={{marginLeft:10}} onPress={() => navigation.openDrawer()}>
              <Menu />
            </Pressable>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
