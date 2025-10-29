import React from "react";
import {View, Pressable, Image } from 'react-native';
import PropTypes from 'prop-types';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from "./style";
import { Pencil } from 'lucide-react-native';


const Member = props => {
  const { userId, uri, badgeTitle, name, email, familyName, onPress } = props;
  const imageSource =
    typeof uri === "string" ? { uri } : uri;

  return (

      <View style={style.container}>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <View>
          <Image 
          resizeMode={'cover'} 
          source={imageSource} 
          style={style.image} />
        </View>
        <View style={style.memberInformation}>
          <Header 
            title={props.name} 
            type={2} color={'#4F4F4F'} 
            numberOfLines={1}
          />
          <View style={style.details}>
            <Header 
              title={props.email} 
              type={4} 
              color={'#828282'} 
            />
          </View>
          <View style={style.details}>
            <Header 
              title={props.familyName + ' family'} 
              type={4} 
              color={'#828282'} 
            />
          </View>
        </View>
        <Pressable
          style={style.pencil}
          onPress={() => {
          props.onPress?.(props.userId); //error
        }}>
          <Pencil color="#4F4F4F" size={25} />
        </Pressable>
      </View>
  )
}

Member.defaultProps = {
  onPress: () => {},
}

Member.propTypes = {
  userId: PropTypes.number.isRequired,
  uri: PropTypes.oneOfType([
    PropTypes.string, // remote URL
    PropTypes.number, // local require()
  ]).isRequired,
  badgeTitle: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

export default Member; 