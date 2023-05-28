import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../styles/colors';

const Card = ({ title, data }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={toggleExpansion}>
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>

      {expanded && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: colors.bgRoxo,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
};

export default Card;
