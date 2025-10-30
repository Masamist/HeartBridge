import React, {useState} from 'react';
import {View, Pressable, Image} from 'react-native';

import {loginUser} from '../../api/user';
import {logIn} from '../../redux/reducers/User';
import {Routes} from '../../navigation/Routes';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

// Styles
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex, style.container]}>
      <View style={style.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} />
      </View>
      <Header title={'Login'} type={1} color={'#4F4F4F'} />
      <View style={style.formContainer}>
        <Input 
          label={'Email'} 
          keyboardType={'email-address'}
          placeholder={'Enter your email'} 
          onChangeText={(value) => setEmail(value)}
        />
        <Input 
          label={'Password'}
          secureTextEntry={true}
          placeholder={'Enter your password'} 
          onChangeText={(value) => setPassword(value)} />
        {error ? <Header title={error} type={3} color={'#FF0000'} /> : null}
        <View style={style.buttonContainer}>
          <Button 
            title={'Login'} 
            color={'pink'} 
            onPress={async () => {
              console.log('Registration ready');
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data))
                navigation.navigate(Routes.Home);
              }
            }}
           />
          <Pressable 
            style={style.registrationButton} 
            onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color={'#4F4F4F'} type={4} title={"Don't have an account?"} />   
          </Pressable>
        </View> 
      </View>
    </View>
  )
}

export default Login;