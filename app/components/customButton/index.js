import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = ({
  title,
  color,
  bgColor,
  width,
  height,
  paddingVertical,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          ...styles.containerBlock,
          width: width,
          height: height,
          backgroundColor: bgColor,
          paddingVertical: paddingVertical,
        }}>
        <Text style={{...styles.btnStyle, color: color}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerBlock: {
    borderWidth: 1,
    borderColor: '#ced1d8',
    borderStyle: 'solid',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  btnStyle: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.8,
    textAlign: 'center',
  },
});

CustomButton.prototype = {
  title: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  paddingVertical: PropTypes.number,
  onPress: PropTypes.string,
};
CustomButton.defaultProps = {
  title: 'Example',
  color: '',
  bgColor: '',
  width: '100%',
  height: 35,
  paddingVertical: 8,
  onPress: () => {
    console.log('pressing Button');
  },
};
