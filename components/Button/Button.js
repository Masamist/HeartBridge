import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = props => {
  const colorToApply = () => {
    switch (props.color) {
      case 'pink':
        return style.bgPink;
      case 'yellow':
        return style.bgYellow;
      case 'grey':
        return style.bgGrey;
      default:
        return style.pink;
    }
  };
  return (
  <Pressable
    disabled={props.isDisabled}
    style={[style.button, props.isDisabled && style.disabled, colorToApply()]}
    onPress={() => props.onPress()}>
    <Text 
      style={[
        style.title, 
        props.color === 'pink' ? style.titleFontWhite:style.titleFontGrey
      ]}>
        {props.title}
      </Text>
  </Pressable>
  )
}

Button.defaultProps= {
  isDisabled: false,
  onPress:() => {},
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
  color: PropTypes.number,
};

export default Button;