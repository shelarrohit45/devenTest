import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../helpers/theme';
import {Card} from './card';

// @ts-ignore

interface ButtonProps {
  onPress?: () => void;
  label: string;
  color?: string;
  fontFamily?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number | string;
  fontSize?: number;
  paddingVertical?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  borderRadius?: number | string;
  height?: number | string;
  style?: object;
  prefix?: any;
  suffix?: any;
}
const {colors, margin, fontsize} = theme;

export const Button = ({
  onPress,
  label,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  fontFamily,
  fontSize,
  paddingVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
  borderRadius,
  style,
  prefix,
  suffix,
  height,
}: ButtonProps) => {
  return (
    <Card
      onPress={onPress}
      style={[
        styles.button,
        {
          paddingVertical,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          marginVertical,
          marginHorizontal,
          borderRadius: borderRadius ? borderRadius : margin.h12,
          backgroundColor: backgroundColor ? backgroundColor : colors.white,
          borderColor: borderColor ? borderColor : colors.primary,
          borderWidth,
          minHeight: 40,
          height,
        },
        style,
      ]}>
      {prefix}
      <Text
        style={{
          flex: suffix ? 1 : 0,
          fontSize: fontSize ? fontSize : fontsize.m,
          color: color ? color : colors.primary,
          fontFamily: fontFamily ? fontFamily : 'Poppins-SemiBold',
          marginLeft: prefix || suffix ? margin.s : margin.none,
        }}>
        {label}
      </Text>
      {suffix}
    </Card>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: margin.t,
    paddingHorizontal: margin.s,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
