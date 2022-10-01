import React, { useCallback } from "react";
import {
  ScrollView,
  Pressable,
  TextInput,
  Modal,
  View,
    ActivityIndicator,
  Platform,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { useState } from "react";
import { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useIsFocused } from "@react-navigation/native";


export default function Register({ navigation }) {
    
    const [mobile, setMobile] = useState("")
    const [MobileError, setMobileError] = useState(false);
  
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false);
  
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false);
  
    
  
    useEffect(() => {
      setEmail('');
      setEmailError(false);
      setPassword('');
      setPasswordError(false);
      setMobile('');
      setMobileError(false);
    }, [useIsFocused()])
  
    const submit = () => {
      if (mobile == '') {
        setMobileError(true);
      }
      if (email == '') {
        setEmailError(true);
      }
      if (password == '') {
        setPasswordError(true);
      }
      else
      {
        register()
      }
    };

    const register = async () => {
    
      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("phone", mobile);
      formdata.append("password", password);
  
      fetch("https://192.168.8.106/3001/resister", {
        method: "POST",
        body: formdata,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.status == true) {
            navigation.navigate("login")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <KeyboardAvoidingView>
        <ScrollView>
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop:50, marginBottom: 50, alignSelf: 'center' }}>Register</Text>
        
              <View style={{ marginHorizontal: wp('5'), marginTop: wp('4') }}>
        <TextInput
          onChangeText={text => {
            setEmail(text);
            setEmailError(false);
          }}
          value={email}
          placeholder={"Email"}
          autoCapitalize='none'
          placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
          style={{ marginTop: hp('1'), backgroundColor: 'rgba(29, 205, 110, 0.1)', borderRadius: 28, paddingHorizontal: 20 }}
          returnKeyType="done"
        />
        {emailError && (
          <Text
            style={{ fontSize: wp('3'), color: 'red', marginLeft: hp('1'), marginTop: hp('.5') }}>
            Email is Required
          </Text>
        )}
      </View>
      <View style={{ marginHorizontal: wp('5'), marginTop: wp('4') }}>
        <TextInput
          onChangeText={text => {
            setMobile(text);
            setMobileError(false);
          }}
          value={mobile}
          keyboardType={'numeric'}
          placeholder={"Mobile number"}
          placeholderTextColor={"rgba(0, 0, 0, 0.6)"}
          style={{ marginTop: hp('1'), backgroundColor: 'rgba(29, 205, 110, 0.1)', borderRadius: 28, paddingHorizontal: 20 }}
          returnKeyType="done"
        />
        {MobileError && (
          <Text
            style={{ fontSize: wp('3'), color: 'red', marginLeft: hp('1'), marginTop: hp('.5') }}>
            Mobile number is Required
          </Text>
        )}
      </View>

     

      <View style={{ marginHorizontal: wp('5'), marginTop: wp('4') }}>
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
          marginTop: hp('6'),
          borderRadius: 40,
        }}>
        <Text
          style={{
            marginVertical: hp('1.5'),
            color: 'white',
            fontWeight: 'bold',
            fontSize: wp('5'),
          }}>
          Register
                </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: hp('1'), alignSelf: 'center' }}>
        <Text style={styles.otp}>Don’t have account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
        >
          <Text
            style={{
              ...styles.otp,
              color: "#1DCD6E",
            }}>
            {' '}
                    Login
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