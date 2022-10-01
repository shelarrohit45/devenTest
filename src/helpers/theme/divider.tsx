import React from 'react';
import {View} from 'react-native';

interface DividerProps {
  backgroundColor?: number | string;
  borderColor?: number | string;
  borderWidth?: number | string;
  paddingVertical?: number | string;
  margin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  style?: object;
  borderRadius?: number;
  width?: number | string;
}

export const Divider = ({
  backgroundColor,
  borderColor,
  borderWidth,
  paddingVertical,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
  borderRadius,
  width
}: DividerProps) => {
  return (
    <View
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        paddingVertical,
        marginBottom,
        margin,
        marginTop,
        marginLeft,
        marginRight,
        marginVertical,
        marginHorizontal,
        borderRadius,
        width
      }}
    />
  );
};
