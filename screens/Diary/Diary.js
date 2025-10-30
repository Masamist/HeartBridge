import React from "react";
import { View, Text } from "react-native";
import {Routes} from '../../navigation/Routes';
import {useDispatch, useSelector} from 'react-redux';
import { resetToInitialState } from '../../redux/reducers/User';

import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import Tab from "../../components/Tab/Tab";
import Message from "../../components/Message/Message";

import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';

const Diary = ({navigation}) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  return (
    <View style={[ globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.outerContainer}>
        <ScreenHeader title="Diary" onPress={() => navigation.navigate(Routes.MemberList)} />
        <View style={style.tab}>
          <Tab tabId={1} title={'Today'} isInactive={false} onPress={() => {}} />
        </View>
        <Message
          useId={1}
          uri={require('../../assets/images/camp.jpg')}
          badgeTitle={'New'}
          message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis elementum urna, sed euismod urna semper in. Aenean ac enim interdum, placerat sem id, tempus diam. Cras sodales lorem mauris, ut posuere enim congue iaculis. Donec blandit feugiat finibus. Ut ut est dui. Vestibulum sollicitudin nisl quam. '}
          onPress={(id) => { console.log('Pressed member with id:', id); }}
        />
      </View>
    </View>
  );
}
export default Diary;