import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";


const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer:{
    marginBottom: verticalScale(50),
  },
  formContainer:{
    marginTop: verticalScale(16),
    width: '100%',
    justifyContent: 'space-between',
    gap: verticalScale(14),
  },
  buttonContainer: {
    marginTop: verticalScale(10),
  },
  registrationButton:{
    alignItems: 'flex-end',
    paddingTop: verticalScale(3),
  },
    error:{
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(16),
    color:'#FF0000',
    marginBottom: verticalScale(24)
  },
});

export default style;