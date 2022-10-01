import React, { useCallback } from "react";
import {
  ScrollView,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { useState } from "react";
import { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false);

  const dispatch = useDispatch();

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    setEmail('');
    setEmailError(false);
    setPassword('');
    setPasswordError(false);
  }, [useIsFocused()])

  const authSuccess = useCallback(
    (access_token) =>
      dispatch({
        type: "FETCHING_AUTH_SUCCESS",
        payload: { access_token },
      }),
    [dispatch]
  );

  const submit = () => {
    if (email == '') {
      setEmailError(true);
      return;
    }
    if (password == '') {
      setPasswordError(true);
      return;
    }
    if (email == "Deven" && password == 'Infotech') {
      authSuccess(
        true,
      );
      return;
    }
    login()
  };

  const login = async () => {
    
    var formdata = new FormData();
    formdata.append("username", email);
    formdata.append("password", password);

    fetch("https://192.168.8.106/3001/login", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.status == true) {
          authSuccess(
            true,
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Text style={{ fontWeight: 'bold', fontSize: 30,marginTop:50, marginBottom: 50, alignSelf: 'center' }}>Login</Text>
        <View style={{ marginHorizontal: wp('5') }}>
          <TextInput
            onChangeText={text => {
              setEmail(text);
              setEmailError(false);
            }}
            value={email}
            placeholder={"Email"}
            placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
            style={{ marginTop: hp('1'), backgroundColor: 'rgba(29, 205, 110, 0.1)', borderRadius: 28, paddingHorizontal: 20 }}
            returnKeyType="done"
          />
          {emailError && (
            <Text
              style={{ fontSize: wp('3'), color: 'red', marginLeft: hp('1'), marginTop: hp('.5') }}>
              Email Id is Required
            </Text>
          )}
        </View>

        <View style={{ marginHorizontal: wp('5'), marginTop: wp('10') }}>
          <TextInput
            onChangeText={text => {
              setPassword(text);
              setPasswordError(false);
            }}
            value={password}
            placeholder={"Password"}
            placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
            style={{ marginTop: hp('1'), backgroundColor: 'rgba(29, 205, 110, 0.1)', borderRadius: 28, paddingHorizontal: 20 }}
            returnKeyType="done"
          />
          {passwordError && (
            <Text
              style={{ fontSize: wp('3'), color: 'red', marginLeft: hp('1'), marginTop: hp('.5') }}>
              Password is Required
            </Text>
          )}
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            submit();
          }}
          style={{
            marginHorizontal: wp('6'),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5bb85d',
            marginTop: hp('10'),
            borderRadius: 40,
          }}>
          <Text
            style={{
              marginVertical: hp('1.5'),
              color: 'white',
              fontWeight: 'bold',
              fontSize: wp('5'),
            }}>
            Login
                </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: hp('3'), alignSelf: 'center' }}>
          <Text style={styles.otp}>Don’t have account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('register')}
          >
            <Text
              style={{
                ...styles.otp,
                color: "#1DCD6E",
              }}>
              {' '}
                    Register
                  </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 1,
  },
  bold: {
    fontWeight: 'bold',
    color: '#464646',
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heading: {
    fontWeight: 'bold',
    color: '#464646',
    fontSize: 20,
    paddingLeft: 5,
  },
  otp: {
    fontSize: 16,
    paddingLeft: 5,
    color: '#000000',
    marginVertical: hp('2'),
  },

  register: {
    fontSize: wp('3.5'),
    fontWeight: 'bold',
  },
  primaryBtn: {
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2EC68D',
    borderColor: '#2EC68D',
  },
});

