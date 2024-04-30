import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

const WeatherIcon = ({ weather }) => {
  let IconComponent;

  switch (weather) {
    case 'sunny':
      IconComponent = <WiDaySunny size={40} color='#ff9800' />;
      break;
    case 'cloudy':
      IconComponent = <WiCloudy size={40} color='#607d8b' />;
      break;
    case 'rainy':
      IconComponent = <WiRain size={40} color='#2196f3' />;
      break;
    case 'snowy':
      IconComponent = <WiSnow size={40} color='#ffffff' />;
      break;
    default:
      IconComponent = null;
  }

  return IconComponent;
};

export default WeatherIcon;