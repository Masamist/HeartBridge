import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  timeContainer: {
    width: horizontalScale(80),
    marginTop: verticalScale(20),
    alignItems: 'center',

  },
  messageContainer: {
    flexDirection: 'collumn',
    alignItems: 'center',
    backgroundColor: '#FFF4D9',
    borderRadius: horizontalScale(5),
    paddingVertical: verticalScale(15),
    position: 'relative',
  },
  // arrowLeft: {
  //   position: 'absolute',
  //   left: -horizontalScale(20),
  //   top: verticalScale(15),
  // },
  image: {
    width: horizontalScale(180),
    height: verticalScale(120),
    borderRadius: horizontalScale(5),
    imagePosition: 'center',
  },
  txtContainer: {
    marginHorizontal: horizontalScale(12),
  },
  message: {
    marginTop: verticalScale(10),
    lineHeight: scaleFontSize(30),
  },
});

export default style;