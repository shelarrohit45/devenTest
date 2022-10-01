import React from 'react';
import {Text as TextForm} from 'react-native';
interface TextProps {
  color?: string;
  textAlign?: string;
  fontSize?: number | string;
  fontFamily?: string;
  style?: object;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginVertical?: number | string;
  marginHorizontal?: number | string;
  numberOfLines?: number;
  onPress?: (value: string) => void;
}

export const Text: React.FC<TextProps> = ({
  children,
  onPress,
  color,
  textAlign,
  fontSize,
  fontFamily,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginVertical,
  marginHorizontal,
  style,
  numberOfLines,
}) => {
  return (
    <TextForm
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[
        {
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          marginVertical,
          marginHorizontal,
          color: color,
          textAlign: textAlign,
          fontSize: fontSize,
          fontFamily: fontFamily,
        },
        style,
      ]}>
      {children}
    </TextForm>
  );
};
