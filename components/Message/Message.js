import React from "react";
import {View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import UserIcon from '../UerIcon/UserIcon';

import style from "./style";
import ArrowLeft from "../ArrowLeft/ArrowLeft";

const Message = props => {
  const { userId, uri, message, onPress } = props;
  const imageSource =
    typeof uri === "string" ? { uri } : uri;

  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <View style={style.arrowLeft}>
          <ArrowLeft />
        </View>
        <View>
          <UserIcon uri={require('../../assets/images/mum.png')} />
          <View style={style.timeNewContainer}>
            <Text style={style.time}>3:15pm</Text>
            <Text style={style.new}>New</Text>
          </View>
        </View>
      </View>
      <View style={style.rightContainer}>
        <Header 
          title={'Sarah'} 
          type={4} 
          color={'#333333'} 
        />
        <View style={style.messageContainer}>
          <Image 
          resizeMode={'cover'} 
          source={imageSource} 
          style={style.image} />
          <Header 
            title={props.message} 
            type={4} 
            color={'#828282'}
          />
        </View>
      </View>
    </View>
  )
}

Message.defaultProps = {
  onPress: () => {},
}

Message.propTypes = {
  userId: PropTypes.number.isRequired,
  uri: PropTypes.oneOfType([
    PropTypes.string, // remote URL
    PropTypes.number, // local require()
  ]).isRequired,
  message: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

export default Message; 