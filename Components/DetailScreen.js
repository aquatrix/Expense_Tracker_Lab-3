import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.amount}>${data.amount.toFixed(2)}</Text>
        <Text style={styles.title}>{data.shopName}</Text>
        <Text style={styles.subtitle}>{data.place}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transaction Details</Text>
        <Text style={styles.detail}>Product: {data.productName}</Text>
        <Text style={styles.detail}>Date: {data.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#4293f5',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343A40',
    marginBottom: 2,
  },
  detail: {
    padding: 2,
    marginLeft: 10,
    fontSize: 16,
    color: '#6C757D',
  },
});

export default DetailScreen;
