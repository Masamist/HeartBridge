import React from 'react';
import {Pressable} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { ChevronLeft } from 'lucide-react-native';

import style from './style';

const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <ChevronLeft color="#828282" size={20} />
      <Header
        style={style.title}
        title={props.title} 
        type={4} 
        color='#828282' />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BackButton;