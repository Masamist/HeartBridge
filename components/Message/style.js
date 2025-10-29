import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftContainer: {
    width: horizontalScale(80),
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  arrowLeft: {
    position: 'absolute',
    right: horizontalScale(-2),
    top: verticalScale(15),
  },
  rightContainer: {
    flex: 1,
    marginRight: horizontalScale(15),
  },
  messageContainer: {
    flexDirection: 'column',
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