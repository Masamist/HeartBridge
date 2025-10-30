import React from "react";
import { View, Text } from "react-native";
import {Routes} from '../../navigation/Routes';

import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Input from "../../components/Input/Input";
import Member from "../../components/Member/Member";
import Message from "../../components/Message/Message";

import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';
import { Screen } from "react-native-screens";

const Home = ({navigation}) => {
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScreenHeader title="Daily Diary" />
      <Button title={'Go to Member List'} onPress={() => navigation.navigate(Routes.MemberList)} />
      <Tab tabId={1} title={'Today'} isInactive={false} onPress={() => {}} />
      <Message
        useId={1}
        uri={require('../../assets/images/camp.jpg')}
        badgeTitle={'New'}
        message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis elementum urna, sed euismod urna semper in. Aenean ac enim interdum, placerat sem id, tempus diam. Cras sodales lorem mauris, ut posuere enim congue iaculis. Donec blandit feugiat finibus. Ut ut est dui. Vestibulum sollicitudin nisl quam. '}
        onPress={(id) => { console.log('Pressed member with id:', id); }}
      />
    </View>
  );
}
export default Home;