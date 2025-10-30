import React from "react";
import { View, Text } from "react-native";
import {Routes} from '../../navigation/Routes';

import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import Member from "../../components/Member/Member";
import BackButton from "../../components/BackButton/BackButton"

import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';


const MemberList = ({navigation}) => {
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.outerContainer}>
        <ScreenHeader title='Member List' />
        <BackButton title='Diary' onPress={() => navigation.navigate(Routes.Diary)} />
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
    </View>
  );
}
export default MemberList;