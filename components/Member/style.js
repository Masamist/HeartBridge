import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: horizontalScale(5),
    marginVertical: verticalScale(8),
    borderWidth: 1,
    borderTopWidth: 1,
    borderColor: '#828282',
    position: 'relative',
  },
  image: {
    width: horizontalScale(95),
    height: verticalScale(90),
    borderTopLeftRadius: horizontalScale(5),
    borderBottomLeftRadius: horizontalScale(5),
    imagePosition: 'center',
  },
  memberInformation: {
    marginTop: verticalScale(1), // Here
    marginLeft: horizontalScale(12),
  },
  details: {
    marginTop: verticalScale(5),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(5),
    right: horizontalScale(3),
  },
  pencil:{
    position:'absolute',
    right: verticalScale(5),
    bottom: horizontalScale(5),
  }
});

export default style;