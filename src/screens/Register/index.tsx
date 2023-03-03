import React, {useEffect, useState} from 'react';
import RegisterComponent from '../../components/Signup/signup';
import envs from './../../config/env';
import axiosInstance from '../../helpers/axiosInterceptor';
import {DrawerItem} from '@react-navigation/drawer';
interface Props {
  name: string;
  value: object;
}

const Register = () => {
  const [form, setForm] = useState<any>({});
  const [errors, setErrors] = useState<object>({});

  //const {BACKEND_URL} = envs;

  // console.log('Backend_url :>> ', BACKEND_URL);
  // console.log('form :>> ', form);

  // useEffect(() => {
  //   axiosInstance.post('/contacts').catch(err => {
  //     console.log('err :', err);
  //   });
  // }, []);

  const onChange = ({name, value}: Props) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name == 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'This field requires min six(6) characters',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    //validations
    console.log('form :>> ', form);
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please add a username'};
      });
    }
    if (!form.firstname) {
      setErrors(prev => {
        return {...prev, firstname: 'Please add a firstname'};
      });
    }
    if (!form.lastname) {
      setErrors(prev => {
        return {...prev, lastname: 'Please add a lastname'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add an email address'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      console.log('11111', 11111);
    }
  };
  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
