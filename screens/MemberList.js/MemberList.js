import React from "react";
import { View, Text } from "react-native";

import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Input from "../../components/Input/Input";
import Member from "../../components/Member/Member";
import Message from "../../components/Message/Message";
import { Screen } from "react-native-screens";

import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';


const MemberList = () => {
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScreenHeader title="Member List" />
      <Text>Member Screen</Text>
      <Member
        useId={1}
        uri={require('../../assets/images/mum.png')}
        badgeTitle={'Admin'}
        name={'Sarah Smith'}
        email={'sarah.smith@gmail.com'}
        familyName={'Smith'}
        onPress={(id) => { console.log('Pressed member with id:', id); }}
      />
    </View>
  );
}
export default MemberList;