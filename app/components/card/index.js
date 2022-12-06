import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({title, quality, rm}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerCard}>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardQuality}>{quality}</Text>
        </View>
        <View>
          <Text style={styles.cardRM}>{rm}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({

    cardContainer: {
        borderBottomWidth: 1,
        borderColor: 'rgba(37, 43, 67, 0.07)',
        borderStyle: 'solid',
      },
      innerCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        alignItems: 'center',
      },
      cardTitle: {
        fontFamily: 'ProximaNova',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.8,
        color: '#363a57',
        marginBottom: 1,
      },
      cardQuality: {
        fontFamily: 'ProximaNova',
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.8,
        color: '#9097a5',
      },
      cardRM: {
        fontFamily: 'ProximaNova',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.8,
        color: '#353596',
      },
});