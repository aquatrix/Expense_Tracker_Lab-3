// HomeScreenStack.js
import React from "react";
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './DetailScreen';
import dummyData from "./DummyData";

const Stack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0582ca',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Transaction's"
        component={HomeScreen}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

const HomeScreen = ({ navigation }) => {

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', { data: item })}
    >
      <View style={styles.itemLeft}>
        <Text style={styles.amount}>${item.amount}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.title}>{item.shopName}</Text>
        <Text style={styles.subtitle}>{item.place}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    paddingTop: 20,
    backgroundColor: '#F8F9FA'
  },
  listContainer: {
    width: '100%',
    marginTop: 2,
    paddingHorizontal: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cbe5f6',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CED4DA',
  },
  itemLeft: {
    flex: 1,
    marginRight: 10,
  },
  itemRight: {
    flex: 3,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343A40',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343A40',
  },
  subtitle: {
    fontSize: 14,
    color: '#6C757D', // Gray color for subtitle
  },
});

export default HomeScreenStack;
