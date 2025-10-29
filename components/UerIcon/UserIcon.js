import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const UserIcon = props => {
  const { uri } = props;

  const imageSource =
    typeof uri === "string" ? { uri } : uri;

  return (
  <View>
    <Image 
      resizeMode={'cover'} 
      source={imageSource} 
      style={style.image} />
  </View>
  )
}

UserIcon.propTypes = {
  uri: PropTypes.oneOfType([
    PropTypes.string, // remote URL
    PropTypes.number, // local require()
  ]).isRequired,
};

export default UserIcon;