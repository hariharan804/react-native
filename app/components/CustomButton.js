import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const CustomButton = props => {
  const {
    title = 'Example',
    container = {},
    style = {},
    onPress = () => {console.log("pressing "+title+" Button");},
  } = props;
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={container}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
