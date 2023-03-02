import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../../components/common/container';
import CustomButton from '../../../components/common/CustomButton';
import Input from '../../../components/common/input';
import {LOGIN} from '../../../constants/routeName';
import styles from './style';

interface Props {
  form: any;
  errors: object;
  onChange?: any;
  onSubmit?: ((event: GestureResponderEvent) => void) | undefined;
}
const RegisterComponent = ({form, errors, onChange, onSubmit}: Props) => {
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
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            icon={<Text />}
            iconPosition="right"
            error={errors.username}
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
          />
          <Input
            label="Firstname"
            placeholder="Enter Firstname"
            icon={<Text />}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'firstname', value});
            }}
            error={errors.firstname}
          />
          <Input
            label="Lastname"
            placeholder="Enter Lastname"
            icon={<Text />}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'lastname', value});
            }}
            error={errors.lastname}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            iconPosition="right"
            icon={<Text />}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            iconPosition="right"
            secureTextEntry={true}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} title="Click Me" primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
