import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const DiaryInput = props => {
  const [value, setValue] = useState('')

  return (
    <View>
      <TextInput
        placeholder={props.placeholder ? props.placeholder:null}
        placeholderTextColor="#B2B2B2"
        value={value} 
        style={style.input}
        keyboardType={props.keyboardType ? props.keyboardType:null}
        secureTextEntry={props.secureTextEntry}
        onChangeText={ val => {
          setValue(val); 
          props.onChangeText(val);
        }} />
    </View>
  );
}
DiaryInput.defaultProps={
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
}

DiaryInput.propsType = {
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText:PropTypes.func,
  keyboardType:PropTypes.string,
  secureTextEntry: PropTypes.bool,
}

export default DiaryInput;