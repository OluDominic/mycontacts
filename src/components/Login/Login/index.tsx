import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../../components/common/container';
import CustomButton from '../../../components/common/CustomButton';
import Input from '../../../components/common/input';
import {REGISTER} from '../../../constants/routeName';
import styles from './style';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={50}
        width={50}
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to YContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            icon={<Text />}
            iconPosition="right"
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
          />
          <CustomButton title="Click Me" primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
