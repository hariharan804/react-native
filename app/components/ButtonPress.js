import React from 'react';
import {Button} from 'react-native';

export function ButtonPress({clickModel}) {
  return (
    <Button
      title="Login"
      color="#841fff"
      onPress={clickModel}
    />
  );
}