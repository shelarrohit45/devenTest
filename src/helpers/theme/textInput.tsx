import React from "react";
import { View, StyleSheet, TextInput as RNTextInput } from "react-native";
import { theme } from "../../helpers/theme";

interface TextInputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  marginTop?: number | string;
  marginLeft?: number | string;
  marginBottom?: number | string;
  prefix?: Element;
  suffix?: any;
  showShadow?: boolean;
  secureTextEntry?: boolean;
  editable?: boolean;
  blurOnSubmit?: boolean;
  returnKeyType?: string;
  elevation?: number;
  borderWidth?: number;
  onSubmitEditing?: (value: string) => void;
  ref?: any;
  multiline?: boolean;
  maxHeight?: any;
  marginHorizontal?: any;
  value?: string;
  onChangeText?: (value: string) => void;
  maxLength: number;
  keyboardType: string;
  fontSize?: number | string;
  autoCapitalize?: string;
  borderRadius?: any;
  borderBottomWidth?: any;
  borderColor?: any;
  backgroundColor?: any;
}

const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (
    {
      placeholder,
      placeholderTextColor,
      marginBottom,
      marginLeft,
      marginTop,
      prefix,
      suffix,
      secureTextEntry,
      returnKeyType,
      blurOnSubmit,
      onSubmitEditing,
      multiline,
      maxHeight,
      marginHorizontal,
      value,
      onChangeText,
      maxLength,
      keyboardType,
      editable,
      fontSize,
      autoCapitalize,
      borderRadius,
      borderBottomWidth,
      borderWidth,
      borderColor,
      backgroundColor,
    },
    ref
  ) => {
    const { colors, fontsize, margin } = theme;
    return (
      <View
        style={{
          minHeight: 40,
          height:
            multiline && maxHeight
              ? 400
              : multiline
              ? margin.h12 + margin.h11
              : margin.hm + margin.hs,
          maxHeight: maxHeight ? maxHeight : null,
          marginHorizontal: marginHorizontal ? marginHorizontal : margin.l,
          marginVertical: margin.hs,
          flexDirection: "row",
          borderRadius: multiline ? margin.hs : borderRadius,
          borderColor: borderColor ? borderColor : "#4B4B5B",
          backgroundColor: backgroundColor ? backgroundColor :colors.white,
          marginBottom,
          marginTop,
          // elevation: 5,
          shadowOpacity: 0.5,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: colors.primary,
          shadowRadius: margin.m,
          marginLeft: marginLeft,
          borderBottomWidth: multiline ? null : borderBottomWidth ? borderBottomWidth : 0,
          borderWidth: borderWidth ? borderWidth : null,
        }}
      >
        {prefix}
        <RNTextInput
          onChangeText={(value) => onChangeText && onChangeText(value)}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : colors.greyWhite
          }
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType ? returnKeyType : "none"}
          blurOnSubmit={blurOnSubmit ? blurOnSubmit : false}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          maxLength={maxLength}
          editable={editable}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          ref={ref}
          style={[
            styles.input,
            {
              textAlignVertical: multiline ? "top" : "center",
              fontFamily: "Poppins-Regular",
              fontSize: fontSize ? fontSize : fontsize.xt,
              color: colors.dodger,
              marginLeft: prefix ? margin.m : margin.l,
            },
          ]}
          value={value}
        />
        <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
          {suffix}
        </View>
      </View>
    );
  }
);
export default TextInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});
