import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const ActivityIndicatorExample = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="small" color="#0ff" />
    <ActivityIndicator animating={true} size="large" />
    <ActivityIndicator size="large" color="#0 f0" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default ActivityIndicatorExample;