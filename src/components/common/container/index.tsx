import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';

const Container = ({style, children}: any) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
