import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface VehicleItemProps {
  name: string;
  driverName: string;
  category: string;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ name, driverName, category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.driverName}>{driverName}</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  driverName: {
    fontSize: 16,
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
});

export default VehicleItem;
