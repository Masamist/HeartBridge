import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    borderRadius: horizontalScale(50),
    borderWidth: 2.5,
    borderColor: '#BDBDBD',
  }
})

export default style;