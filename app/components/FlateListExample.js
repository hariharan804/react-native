import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    title: "First",
  },
  {
    id: "2",
    title: "Second",
  },
  {
    id: "3",
    title: "Third",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const FlateListExample = () => {
  const [selectedId, setSelectedId] = useState("2");

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#841fff" : "#841fff5f";
    const color = item.id === selectedId ? '#fff' : '#000';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
  );
};

const styles = StyleSheet.create({
  
  item: {
    padding: 13,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:8,
  },
  title: {
    fontSize: 22,
    fontFamily:"Nunito-SemiBold"
  },
});

export default FlateListExample;