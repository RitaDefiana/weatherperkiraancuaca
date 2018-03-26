import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>#JaenKuliahPTI</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#BDBDBD',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 18,
      color: '#424242',
      textAlign: 'center'
    }
};
export default Footer;
