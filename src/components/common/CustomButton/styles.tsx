import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';
//import colors from '../../../assets/themes/colors';

export default StyleSheet.create({
  textInput: {
    flex: 1,
    width: '100%',
  },
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
  loaderSection: {
    flexDirection: 'row',
  },
});
