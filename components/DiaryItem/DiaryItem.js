import React from "react";
import {View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import UserIcon from '../UerIcon/UserIcon';

import style from "./style";
import ArrowLeft from "../ArrowLeft/ArrowLeft";

const DiaryItem = props => {
  const { id, userId, auther, text, image, onPress, timestamp, notification } = props;
  const imageSource =
    typeof props.image === "string" ? { image } : image;

  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <View style={style.arrowLeft}>
          <ArrowLeft />
        </View>
        <View>
          <UserIcon uri={require('../../assets/images/mum.png')} />
          <View style={style.timeNewContainer}>
            <Text style={style.time}>{props.timestamp}</Text>
            <Text style={style.new}>New</Text>
          </View>
        </View>
      </View>
      <View style={style.rightContainer}>
        <Header 
          title={props.auther} 
          type={4} 
          color={'#333333'} 
        />
        <View style={style.messageContainer}>
          <Image 
          resizeMode={'cover'} 
          source={imageSource} 
          style={style.image} />
          <Header 
            title={props.text} 
            type={4} 
            color={'#828282'}
          />
        </View>
      </View>
    </View>
  )
}

DiaryItem.defaultProps = {
  onPress: () => {},
}

DiaryItem.propTypes = {
  id:PropTypes.number.required,
  userId: PropTypes.number.isRequired,
  auther: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([
    PropTypes.string, // remote URL
    PropTypes.number, // local require()
  ]).isRequired,
  timestamp: PropTypes.string.isRequired,
  notification: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
}

export default DiaryItem; 