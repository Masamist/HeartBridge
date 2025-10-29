import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Input from "../../components/Input/Input";
import Member from "../../components/Member/Member";
import Message from "../../components/Message/Message";

import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title="Welcome to Home Screen" type={1} />
      <Tab tabId={1} title={'Today'} isInactive={false} onPress={() => {}} />
      <Input label={'Email'} placeholder={'Enter your email'} onChangeText={() => {}} />
      <Text>Home Screen</Text>
      <Member
        useId={1}
        uri={require('../../assets/images/mum.png')}
        badgeTitle={'Admin'}
        name={'Sarah Smith'}
        email={'sarah.smith@gmail.com'}
        familyName={'Smith'}
        onPress={(id) => { console.log('Pressed member with id:', id); }}
      />
      <Message
        useId={1}
        uri={require('../../assets/images/camp.jpg')}
        badgeTitle={'New'}
        message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis elementum urna, sed euismod urna semper in. Vestibulum gravida nunc ante, in fringilla augue tempus a. Curabitur cursus ut nulla quis imperdiet. Aenean ac enim interdum, placerat sem id, tempus diam. Cras sodales lorem mauris, ut posuere enim congue iaculis. Donec blandit feugiat finibus. Ut ut est dui. Vestibulum sollicitudin nisl quam, non accumsan arcu dignissim a. '}
        onPress={(id) => { console.log('Pressed member with id:', id); }}
      />
    </View>
  );
}
export default Home;