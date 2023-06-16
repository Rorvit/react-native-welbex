import React from 'react';
import { View, Text, Button } from 'react-native';
import vehiclesData from '../db/vehicles.json';

const DetailsScreen = ({ route }: { route: any }) => {
  const { transportId } = route.params;
  const transport = vehiclesData.find((vehicle) => vehicle.id === transportId);

  const handleCall = () => {
    // Implement logic to make a phone call
  };

  const handleChat = () => {
    // Implement logic to open WhatsApp chat
  };

  if (!transport) {
    return <Text>Transport not found</Text>;
  }

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>{transport.name}</Text>
      <Text>{transport.driverName}</Text>
      <Text>{transport.category}</Text>
      <Button title="Call" onPress={handleCall} />
      <Button title="Chat" onPress={handleChat} />
    </View>
  );
};

export default DetailsScreen;
