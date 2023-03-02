import React, {useState} from 'react';
import RegisterComponent from '../../components/Signup/signup';

interface Props {
  name: string;
  value: object;
}

const Register = () => {
  const [form, setForm] = useState<object>({});
  const [errors, setErrors] = useState<object>({});

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
