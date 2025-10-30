import React, {useState} from 'react';
import {View, ScrollView, Text, Image, Pressable} from 'react-native';

import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes'
import {createUser} from '../../api/user'
// import BackButton from '../../components/BackButton/BackButton'

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';



const Registration = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountName, setAccountName] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View> */}
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={style.container}>
        <View style={style.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
        <Header title={'Register'} type={1} color={'#4F4F4F'} />
        <View style={style.formContainer}>
          <Input 
            label={'First Name'} 
            placeholder={'Enter your First Name...'}
            onChangeText={(value) => setFirstName(value)}
          />
          <Input 
            label={'Last Name'} 
            placeholder={'Enter your Last Name...'}
            onChangeText={(value) => setLastName(value)}
          />
          <Input 
            label={'Email'} 
            placeholder={'Enter your Email...'}
            keyboardType={'email-address'}
            onChangeText={(value) => setEmail(value)}
          />
          <Input 
            secureTextEntry={true}
            label={'Password'} 
            placeholder={'******'}
            onChangeText={(value) => setPassword(value)}
          />
          <Input 
            secureTextEntry={true}
            label={'Family Account Name'} 
            placeholder={'e.g., The Smiths'}
            onChangeText={(value) => setAccountName(value)}
          />

        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}    
          <View style={style.buttonContainer}>
            <Button
              isDisabled={
                firstName.length <= 2 || lastName.length <= 2  || email.length <= 5 || password.length < 8 || accountName.length <= 2
              }
              title={'Registration'}
              color={'pink'}
              onPress={async () => {
                let user = await createUser(firstName, lastName, email, password, accountName);
                if (user.error) {
                  setError(user.error);
                } else {
                  setError('');
                  setSuccess('You have successfully registered');
                  setTimeout(() => navigation.goBack(), 3000);
                }
              }}
            />
          <Pressable 
            style={style.loginButton} 
            onPress={() => navigation.navigate(Routes.Login)}>
          <Header color={'#4F4F4F'} type={4} title={"Already have an account?"} />   
          </Pressable>
          </View>
          
        </View>
      </ScrollView>
    </View>
  )
}

export default Registration;