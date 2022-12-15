import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

export default function IssueCard({item, navigation}) {
  const {id, title, subTitle, status} = item;
  const [color, setColor] = useState('#f27d35');
  useEffect(() => {
    if (status) {
      if (status.toLowerCase() == 'open') {
        setColor('#f27d35');
      } else if (status.toLowerCase() == 'resolved') {
        setColor('#31b198');
      } else {
        setColor('#252b43');
      }
    }
  }, [status]);

  return (
    <View style={styles.root} >
    <TouchableOpacity onPress={()=>navigation.navigate('IssuesDetails',{id:id})}  activeOpacity={0.7}>
      <View style={styles.detailsContainer}>
        <Text style={styles.id}>{id}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusLable}>
          Status:{' '}
          <Text style={{...styles.statusValue, color: color}}>{status}</Text>
        </Text>
      </View>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 7,
    marginBottom: 7,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  detailsContainer: {
    padding: 20,
  },
  id: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9297a5',
    marginBottom: 5,
  },
  title: {
    fontFamily: 'ProximaNova',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#363a57',
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#9297a5',
    marginBottom: 5,
  },
  statusContainer: {
    borderTopWidth: 1,
    borderColor: '#ebebeb',
    borderStyle: 'solid',
    paddingTop: 15,
    paddingBottom: 5,
  },
  statusLable: {
    textAlign: 'center',
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#9297a5',
  },
  statusValue: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#9297a5',
  },
});

IssueCard.prototype = {
  id: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  status: PropTypes.string,
};

IssueCard.defaultProps = {
  id: '#42HIL',
  title: 'Title',
  subTitle: 'Sub Title',
  status: 'Resolved',
};
