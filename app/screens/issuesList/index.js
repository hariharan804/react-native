import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Defs, G, Path, Svg} from 'react-native-svg';
import IssueCard from '../../components/issueCard';

const data = [
  {
    id: '#ICG12098',
    title: 'Having trouble with access a service',
    subTitle: 'Physio - Ultra (Monthly)',
    status: 'Open',
  },
  {
    id: '#ICG13010',
    title: 'Having trouble with access a service',
    subTitle: 'Physio - Ultra (Weekly)',
    status: 'Pending',
  },
  {
    id: '#ICG12099',
    title: 'Pre-Assessment tips are not yet received.',
    subTitle: 'Physio - Basic (Yearly)',
    status: 'Resolved',
  },
  {
    id: '#ICG12019',
    title: 'Pre-Assessment tips are not yet received.',
    subTitle: 'Physio - Basic (Yearly)',
    status: 'Resolved',
  },
  {
    id: '#ICG12044',
    title: 'Pre-Assessment tips are not yet received.',
    subTitle: 'Physio - Basic (Yearly)',
    status: 'Resolved',
  },
];
export default function IssuesList() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        animated={true}
        backgroundColor="#f3f5f9"
        barStyle={'dark-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backBtn}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/images/arrow-right.png')}
            />
          </View>
          <Text style={styles.title}>Issuse</Text>
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.search}>
            <Svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5122 4.43902C7.60446 4.43902 4.43902 7.60283 4.43902 11.5026C4.43902 15.4024 7.60446 18.5662 11.5122 18.5662C13.4618 18.5662 15.225 17.7801 16.5055 16.5055C17.7918 15.2251 18.5854 13.4574 18.5854 11.5026C18.5854 7.60283 15.4199 4.43902 11.5122 4.43902ZM2 11.5026C2 6.25314 6.26008 2 11.5122 2C16.7643 2 21.0244 6.25314 21.0244 11.5026C21.0244 13.6919 20.2822 15.7095 19.0374 17.3157L21.6423 19.9177C22.1188 20.3936 22.1193 21.1658 21.6433 21.6423C21.1673 22.1188 20.3952 22.1193 19.9187 21.6433L17.3094 19.037C15.7048 20.2706 13.6935 21.0052 11.5122 21.0052C6.26008 21.0052 2 16.7521 2 11.5026Z"
                fill="#030D45"
              />
            </Svg>
          </View>
          <View style={styles.filterInput}>
            <TextInput
              style={styles.input}
              placeholder="Search here…"
              onChangeText={() => {
                console.log('va');
              }}
              //   value={'text'}
            />
          </View>
          <View style={styles.filterIcon}>
            <Svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              id="magicoon-Regular"
              xmlns="http://www.w3.org/2000/svg">
              <Defs></Defs>
              <G id="filter-Regular">
                <Path
                  fill="#030D45"
                  id="filter-Regular-2"
                  data-name="filter-Regular"
                  className="cls-1"
                  d="M18.5,2.25H5.5A2.252,2.252,0,0,0,3.25,4.5V6.586a1.736,1.736,0,0,0,.513,1.237l5.121,5.121a1.246,1.246,0,0,1,.366.885V21a.75.75,0,0,0,1.2.6l4-3a.75.75,0,0,0,.3-.6V13.829a1.246,1.246,0,0,1,.366-.885l5.121-5.121a1.736,1.736,0,0,0,.513-1.237V4.5A2.252,2.252,0,0,0,18.5,2.25Zm-13,1.5h13a.75.75,0,0,1,.75.75V6.25H4.75V4.5A.75.75,0,0,1,5.5,3.75Zm8.556,8.134a2.73,2.73,0,0,0-.806,1.945v3.8L10.75,19.5V13.829a2.73,2.73,0,0,0-.806-1.945L5.811,7.75H18.189Z"
                />
              </G>
            </Svg>
          </View>
        </View>
        <View style={styles.issuesCount}>
          <View style={styles.textContainer}>
            <Text style={styles.countingLable}>open</Text>
            <View style={{...styles.countView, backgroundColor: '#f27d35'}}>
              <Text style={styles.countingNumber}>1</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.countingLable}>RESOLVED</Text>
            <View style={{...styles.countView, backgroundColor: '#31b198'}}>
              <Text style={styles.countingNumber}>1</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.countingLable}>PENDING</Text>
            <View style={{...styles.countView, backgroundColor: '#252b43'}}>
              <Text style={styles.countingNumber}>1</Text>
            </View>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // extraData={selectedId}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const renderItem = ({item}) => {
  // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  // const color = item.id === selectedId ? 'white' : 'black';

  return <IssueCard item={item} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(37, 43, 67, 0.03)',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f3f5f9',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  backArrow: {
    width: 24,
    height: 24,
    alignContent: 'flex-start',
    resizeMode: 'contain',
  },
  title: {
    flex: 1,
    fontFamily: 'ProximaNova',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: '#363a57',
    textAlign: 'center',
    alignContent: 'center',
  },
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 51,
    marginBottom: 15,
  },
  search: {
    marginLeft: 10,
    marginRight: 30,
  },
  filterInput: {
    flex: 1,
  },
  input: {
    color: '#9297a5',
  },
  filterIcon: {
    marginLeft: 20,
    width: 40,
  },
  issuesCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 50,
    marginBottom: 5,
  },
  textContainer: {
    flexDirection: 'row',
  },
  countView: {
    marginLeft: 10,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 8,
    // width: 20,
    // height:20
  },
  countingLable: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#9297a5',
  },
  countingNumber: {
    fontFamily: 'ProximaNova',
    fontSize: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: '600',
    letterSpacing: 0.8,
    color: '#FFF',
  },
});
