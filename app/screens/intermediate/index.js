import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
// import Svg, {Circle, G, SvgUri} from 'react-native-svg';
// import Doted from "../../assets/images/doted.svg"
function Intermediate({navigation}) {
  const ButtonContainer = styled.TouchableOpacity`
    margin-vertical: 40px;
    width: 120px;
    height: 40px;
    padding: 12px;
    border-radius: 10px;
    background-color: #00f;
  `;
  const ButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #fff;
  `;
  return (
    <View>
      <Text>Intermediate</Text>
      {/* <Doted /> */}

      {/* <SvgUri width="300" height="200" svgXmlData={Doted} /> */}
      <ButtonContainer onPress={() => navigation.navigate('Home')}>
        <ButtonText>{'title'}</ButtonText>
      </ButtonContainer>
    </View>
  );
}

export default Intermediate;
