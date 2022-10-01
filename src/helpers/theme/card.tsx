import React from 'react';
import {View, Pressable} from 'react-native';

interface CardProps {
  backgroundColor?: string;
  margin?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginVertical?: string | number;
  marginHorizontal?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingVertical?: string | number;
  paddingHorizontal?: string | number;
  style?: object;
  borderRadius?: string | number;
  justifyContent?: string;
  alignItems?: string;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  backgroundColor,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingVertical,
  paddingHorizontal,
  style,
  justifyContent,
  alignItems,
  borderRadius,
  onPress
}) => {
  return (
    <Pressable onPress={onPress}>
    <View
      style={[
        {
          margin: margin,
          marginTop: marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          padding: padding,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingVertical,
          paddingHorizontal,
          backgroundColor: backgroundColor,
          justifyContent: justifyContent,
          alignItems: alignItems,
          borderRadius: borderRadius,
        },
        style,
      ]}>
      {children}
    </View>
    </Pressable>
  );
};
