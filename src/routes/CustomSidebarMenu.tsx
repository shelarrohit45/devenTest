import React, { useCallback } from "react";
import {
  Pressable,
  View,
  Modal,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import BackArrow from "../../assets/icons/backarrow";

import { Text, theme } from "../helpers/theme";
import LinearGradient from "react-native-linear-gradient";
import Menu from '../../assets/icons/menu';
import Home from '../../assets/icons/home';
import { screenHeight } from "../responsive/responsive";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
const { colors, fontsize, header, margin, fontfamily } = theme;

const CustomSidebarMenu = (props) => {
  const [editPopup, setEditPopup] = React.useState<boolean>(false);
  const [spinner, setSpinner] = React.useState(false);
  const dispatch = useDispatch();

  const item = [
    {
      activeIcon: <Home color={"#1DCD6E"} />,
      icon: <Home color={"#8F8F8F"} />,
      navOptionName: "Home",
      screenToNavigate: "ReplyScreen",
    },
    {
      activeIcon: <Home color={"#1DCD6E"} />,
      icon: <Home color={"#8F8F8F"} />,
      navOptionName: "Logout",
      screenToNavigate: "Logout",
    },
  ];

  const List = item;
  const authSuccess = useCallback(
    (access_token) =>
      dispatch({
        type: "FETCHING_AUTH_SUCCESS",
        payload: { access_token },
      }),
    [dispatch]
  );

  return (
    <View style={{ flex: 1, height: screenHeight }}>
      <DrawerContentScrollView
        bounces={false}
        {...props}
        showsVerticalScrollIndicator={false}
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={spinner}
          onRequestClose={() => setSpinner(false)}
        >
          {/*//@ts-ignore*/}
          <View style={{ flex: 1 }} activeOpacity={1}>
            <View
              style={{
                backgroundColor: colors.transparentGrey,
                flex: 1,
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator
                style={{ marginTop: 70 }}
                size="large"
                color={"#000"}
              />
            </View>
          </View>
        </Modal>
        <View
          style={{
            marginTop: -10,
          }}
        />
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                alignItems: "center",
                marginTop: 10,
                marginBottom: 20,
                //@ts-ignore
                backgrounColor: colors.transparentWhite,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.white,
                  borderWidth: 2.5,
                  borderRadius: margin.half,
                  borderColor: colors.transparentWhite,
                  margin: margin.s,
                }}
              >
                <Image
                  source={require('../../assets/img/profile.png')}
                  style={{
                    width: margin.w13,
                    height: margin.w13,
                    borderRadius: margin.half,
                    margin: 3,
                  }}
                ></Image>
              </View>
              <Text
                fontSize={fontsize.m}
                style={{
                  color: colors.white,
                  fontFamily: fontfamily.regular,
                }}
              >
                Rohit Shelar
              </Text>
            </View>
          </View>
        <View
          style={{
            backgroundColor: "white",
            height: screenHeight / 1.3,
          }}
        >
          {List.map((item, key) => {
            return (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                key={key}
                colors={[
                  "#227AC3",
                  "#227AC3",
                  colors.transparentWhite,
                  colors.transparentWhite,
                  "rgba(255, 255, 255, 0)",
                ]}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  key={key}
                  colors={[
                    colors.white,
                    colors.white,
                    "rgba(255, 255, 255, 0)",
                    "rgba(255, 255, 255, 0)",
                  ]}
                  //@ts-ignore
                  style={{
                    borderTopLeftRadius:
                      props.state.index === key ? margin.hm : 0,
                    borderBottomLeftRadius:
                      props.state.index === key ? margin.hm : 0,
                  }}
                >
                  <Pressable
                    style={{
                      borderBottomRightRadius:
                        props.state.index - 1 === key ? 0 : 0,
                      borderTopRightRadius:
                        props.state.index + 1 === key ? 0 : 0,
                      backgroundColor:
                        props.state.index === key ? "#FFFFFF" : "#FFFFFF",
                    }}
                    onPress={() => {
                      if (item.navOptionName == "Logout") {
                        props.navigation.closeDrawer();
                        authSuccess(
                          false,
                        );
                        setEditPopup(true);
                      } else if (
                        item.screenToNavigate &&
                        item.screenToNavigate != " "
                      ) {
                        props.navigation.navigate(item.screenToNavigate);
                        props.navigation.closeDrawer();
                      } else {
                        props.navigation.closeDrawer();
                      }
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        left: 0,
                        marginLeft: margin.xl,
                        paddingVertical: margin.hxt,
                        alignItems: "center",
                      }}
                    >
                      {props.state.index === key ? item.activeIcon : item.icon}
                      <Text
                        style={{
                          flex: 0.9,
                          color:
                          props.state.index === key ? "#1DCD6E" : "#8F8F8F",
                          marginLeft: margin.l,
                          fontSize: fontsize.xt,
                          fontFamily: fontfamily.medium,
                        }}
                      >
                        {item.navOptionName}
                      </Text>
                    </View>
                  </Pressable>
                </LinearGradient>
              </LinearGradient>
            );
          })}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalMainView: {
    backgroundColor: "#000000aa",
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  YesButton: {
    backgroundColor: "green",
    justifyContent: "center",
    borderRadius: 5,
    width: 100,
    height: 40,
  },
  NoButton: {
    backgroundColor: "#227AC3",
    justifyContent: "center",
    borderRadius: 5,
    width: 100,
    height: 40,
  },
  signupButtonText: {
    textAlign: "center",
    color: colors.white,
    fontSize: fontsize.m,
    fontFamily: fontfamily.semibold,
  },
});

export default CustomSidebarMenu;
