import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import TRANSPORTS from '../db/vehicles.json';

const MapScreen = () => {
  const initialRegion = {
    latitude: 59.9343,
    longitude: 30.3351,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const renderMarkers = () => {
    // Map through transports and render markers on the map based on their locations
    // You can use transports array from the db folder
    // Example:
    return TRANSPORTS.map((name) => (
      <Marker
        key={name.id}
        coordinate={{ latitude: name.latitude, longitude: name.longitude }}
        title={name.name}
        description={name.category}
      />
    ));
  };

  return (
    <View>
      <Text>Map Screen</Text>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        {renderMarkers()}
      </MapView>
    </View>
  );
};

export default MapScreen;
