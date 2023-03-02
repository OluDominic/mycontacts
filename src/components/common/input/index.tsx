import React, {ReactElement, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './style';

interface Props {
  style?: {};
  icon?: ReactElement | null;
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  value?: string | undefined;
  iconPosition?: string;
  label: React.ReactNode;
  placeholder?: string;
  children?: React.ReactNode;
  error?: string | null;
}

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}: Props): JSX.Element => {
  const [focused, setFocused] = useState<boolean>(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={[styles.inputContainer]}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
