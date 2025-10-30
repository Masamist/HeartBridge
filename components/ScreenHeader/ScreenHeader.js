import React from 'react';
import {View, Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { CalendarDays } from 'lucide-react-native';
import { Menu } from 'lucide-react-native';

import style from './style';

const ScreenHeader = props => {
  return (
  <View style={style.container}>
    <View style={style.subContainer}>
      <Image source={require('../../assets/images/heart.png')} />
      <Header title={props.title} type={5} color={'#715533'} /> 
    </View>
    <View style={style.subContainer}>
      <Pressable onPress={{}}>
        <CalendarDays color="#828282" size={30} />
      </Pressable>
      <Pressable onPress={props.onPress}>
        <Menu color="#828282" size={30} />
      </Pressable> 
    </View>
  </View>
  )
}

ScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ScreenHeader;