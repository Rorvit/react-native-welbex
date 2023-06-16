export type RootStackParamList = {
  Home: undefined;
  Details: { vehicleId: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Map: undefined;
  Settings: undefined;
};

export type Vehicle = {
  id: string;
  name: string;
  driverName: string;
  category: string;
  latitude: number;
  longitude: number;
};
