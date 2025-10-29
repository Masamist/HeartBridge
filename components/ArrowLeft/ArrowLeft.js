import React from 'react';
import Svg, { Polygon } from 'react-native-svg';
import { View } from 'react-native';

const ArrowLeft = () => (
  <View>
    <Svg height="18" width="30">
      <Polygon
        points="30,0 0,9 30,18"
        fill="#FFF4D9"
      />
    </Svg>
  </View>
);

export default ArrowLeft;