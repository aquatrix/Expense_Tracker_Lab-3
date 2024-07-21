import React from "react";
import { View, Text, StyleSheet } from "react-native";

import dummyData from "./DummyData";

const SummaryScreen = () => {
  const totalTransaction = dummyData.length;
  let totalAmount = 0;
    dummyData.forEach(item => {
        totalAmount = item.amount + totalAmount;
    });
  const hsAmount = Math.max(...dummyData.map((item) => item.amount));
  const lsAmount = Math.min(...dummyData.map((item) => item.amount));
  const hsTransaction = dummyData.find(
    (item) => item.amount === hsAmount
  );
  const lstransaction = dummyData.find(
    (item) => item.amount === lsAmount
  );
  return (
    <View style={styles.container}>
      <View style={styles.dataContianer}>
        <View style={styles.summaryItem}>
          <Text style={styles.label}>Total Transactions:</Text>
          <Text style={styles.value}>{totalTransaction}</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.label}>Total Amount:</Text>
          <Text style={styles.value}>${totalAmount}</Text>
        </View>
      </View>

            <View  style={styles.detailItem}>
                <View style={styles.summaryItem}>
                <Text style={styles.label}>Highest Spending:</Text>
                <Text style={styles.value}>${hsAmount}</Text>
                </View>
                <View style={styles.summaryItem}>
                <Text style={styles.value}>Place:</Text>
                <Text style={styles.value}>{hsTransaction.shopName}</Text>
                </View>
            </View>

            <View style={styles.detailItem}>
                <View style={styles.summaryItem}>
                <Text style={styles.label}>Lowest Spending:</Text>
                <Text style={styles.value}>${lsAmount}</Text>
                </View>

                <View style={styles.summaryItem}>
                <Text style={styles.value}>Place:</Text>
                <Text style={styles.value}>{lstransaction.shopName}</Text>
                </View>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#F8F9FA",
  },
  dataContianer:{
        backgroundColor: '#cbe5f6',
        padding: 10,
        paddingBottom: 30,
        paddingTop: 40,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
  },

  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  
  detailItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: '#eef6fc',
    alignItems: "center",
    width: "100%",
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#343A40",
  },
  value: {
    fontSize: 16,
    color: "#6C757D",
  },
});

export default SummaryScreen;
