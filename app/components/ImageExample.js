import React from 'react';
import {View, Image, StyleSheet, ImageBackground, Text} from 'react-native';

export const ImageExample = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
};

// export default ImageExample;export
const image = {
  uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
};

export const ImageBackgroundExample = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  image: {
    flex:1,
    width: '100%',
    height: 200,
  },
  text: {
    color: '#fff',
    marginTop:"10%",
    height:"50%",
    fontSize: 42,
    lineHeight: 84,
    fontFamily:"Nunito-Bold",
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
