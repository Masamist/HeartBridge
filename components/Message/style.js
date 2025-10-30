import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftContainer: {
    width: horizontalScale(60),
    marginTop: verticalScale(20),
    alignItems: 'flex-start',
  },
  timeNewContainer: {
    marginTop: verticalScale(5),
    alignItems: 'center',
  },
  time: {
    marginTop: verticalScale(-1),
    fontFamily: getFontFamily('Montserrat', '500'),
    fontSize: horizontalScale(10),
    color: '#4F4F4F',
  },
  new: {
    fontFamily: getFontFamily('Montserrat', '700'),
    fontSize: horizontalScale(12),
    color: '#EB5757',
    lineHeight: verticalScale(10),
  },
  arrowLeft: {
    position: 'absolute',
    right: horizontalScale(-2),
    top: verticalScale(15),
  },
  rightContainer: {
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#FFF4D9',
    borderRadius: horizontalScale(5),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
  },
  image: {
    // width: horizontalScale(180),
    width: '100%',
    height: verticalScale(150),
    borderRadius: horizontalScale(5),
    imagePosition: 'center',
    marginBottom: verticalScale(10),
  },
});

export default style;