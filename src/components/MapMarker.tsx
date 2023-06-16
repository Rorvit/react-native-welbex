import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface MapMarkerProps {
  type: 'cargo' | 'passenger' | 'special';
}

const MapMarker: React.FC<MapMarkerProps> = ({ type }) => {
  let markerIcon;

  switch (type) {
    case 'cargo':
      markerIcon = require('../assets/cargo-marker.png');
      break;
    case 'passenger':
      markerIcon = require('../assets/passenger-marker.png');
      break;
    case 'special':
      markerIcon = require('../assets/special-marker.png');
      break;
    default:
      markerIcon = require('../assets/default-marker.png');
      break;
  }

  return (
    <View style={styles.container}>
      <Image source={markerIcon} style={styles.markerIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerIcon: {
    width: 30,
    height: 30,
  },
});

export default MapMarker;
