import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";


const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer:{
    marginVertical: verticalScale(20),
  },
  formContainer:{
    marginTop: verticalScale(12),
    width: '100%',
    justifyContent: 'space-between',
    gap: verticalScale(14),
  },
  loginButton:{
    alignItems: 'flex-end',
    paddingTop: verticalScale(3),
  },
  buttonContainer: {
    marginTop: verticalScale(10),
  },
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  error:{
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(16),
    color:'#FF0000',
    marginBottom: verticalScale(24)
  },
  success: {
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(16),
    color:'#28A745',
    marginBottom: verticalScale(24)
  }
});

export default style;