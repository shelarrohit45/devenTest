import React, {useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';
import {MyTheme as theme} from './theme';
import {Text as Text} from './text';
const {colors, margin, fontsize, fontfamily} = theme;

interface TextInputProps {
  placeholder?: string;
  value?: string;
  icon?: string;
  secureTextEntry?: boolean;
  maxLength: number;
  keyboardType: string;
  onChangeText?: (value: string) => void;
  prefix?: any;
  editable: boolean;
}

const FloatingTextInput = ({
  placeholder,
  value,
  icon,
  onChangeText,
  prefix,
  editable,
  maxLength,
  keyboardType,
}: TextInputProps) => {
  const [isFieldActive, setIsFieldActive] = React.useState<boolean>();
  const position = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    _handleFocus();
  }, []);

  function _returnAnimatedTitleStyles() {
    return {
      bottom: position.interpolate({
        inputRange: [0, 1],
        outputRange: [8, 28],
      }),
      fontSize: isFieldActive ? 10 : fontsize.m,
      color: isFieldActive ? colors.gunPowder : colors.arsenic,
    };
  }

  function _handleFocus() {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }

  function _handleBlur() {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }

  return (
    <View
      style={{flexDirection: 'row', margin: margin.m, alignItems: 'center'}}>
      {prefix && <View style={{flex: 0.15}}>{prefix}</View>}
      <View style={{flex: 1, marginTop: -12}}>
        <Animated.Text
          style={[styles.titleStyles, _returnAnimatedTitleStyles()]}>
          {placeholder}
        </Animated.Text>
        <RNTextInput
          value={value}
          style={{
            marginTop: 8,
            includeFontPadding: false,
            paddingBottom: 5,
            fontSize: fontsize.m,
            fontFamily: fontfamily.regular,
            borderBottomWidth: 1,
            color: editable ? colors.black : colors.gunPowder,
          }}
          underlineColorAndroid="transparent"
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          onChangeText={value => onChangeText && onChangeText(value)}
          editable={editable}
          maxLength={maxLength}
          //@ts-ignore
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};
export default FloatingTextInput;

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    padding: 0,
    paddingHorizontal: 4,
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Poppins-Regular',
    left: 4,
    bottom: 0,
  },
});
