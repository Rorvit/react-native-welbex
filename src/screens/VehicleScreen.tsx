import React from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Vehicle } from '../navigation/types';

const VehicleScreen = ({ route }: { route: any }) => {
  const { vehicle }: { vehicle: Vehicle } = route.params;

  const handleCallPress = () => {
    // Implement call functionality
  };

  const handleMessagePress = () => {
    // Implement message functionality
  };

  return (
    <View>
      <MapView
        style={{ width: '100%', height: 200 }}
        initialRegion={{
          latitude: vehicle.latitude,
          longitude: vehicle.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
          title={vehicle.name}
          description={vehicle.driverName}
        />
      </MapView>
      <Text>{vehicle.category}</Text>
      <Text>{vehicle.driverName}</Text>
      <Button title="Позвонить" onPress={handleCallPress} />
      <Button title="Написать" onPress={handleMessagePress} />
    </View>
  );
};

export default VehicleScreen;
