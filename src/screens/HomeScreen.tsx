import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import vehiclesData from '../db/vehicles.json';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }: { item: any }) => {
    if (selectedCategory && item.category !== selectedCategory) {
      return null;
    }

    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.driverName}</Text>
        <Text>{item.category}</Text>
        <Button
          title="Подробнее"
          onPress={() => navigation.navigate('Details', { vehicleId: item.id })}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>Фильтр по категориям:</Text>
      <Button title="Грузовой" onPress={() => handleCategoryPress('Грузовой')} />
      <Button title="Пассажирский" onPress={() => handleCategoryPress('Пассажирский')} />
      <Button title="Спецтранспорт" onPress={() => handleCategoryPress('Спецтранспорт')} />
      <FlatList
        data={vehiclesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
