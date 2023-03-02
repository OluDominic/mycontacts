import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

interface Props {
  title: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  secondary?: object | boolean;
  primary?: object | boolean;
  danger?: object | boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  ...props
}: Props) => {
  //const [focused, setFocused] = useState<boolean>(false);

  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}
            {...props}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
