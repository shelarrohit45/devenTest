import React from 'react';
import {View} from 'react-native';

import {theme} from '../../helpers/theme';
interface ContainerProps {
  backgroundColor?: string;
  paddingHorizontal?: string;
  style?: object;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor,
  paddingHorizontal,
  style,
}) => {
  const {margin} = theme;
  return (
    <View
      style={[
        {
          flex: 1,
          paddingHorizontal: paddingHorizontal,
          backgroundColor: backgroundColor,
          paddingTop: 25,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
