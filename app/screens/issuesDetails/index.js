import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/customButton';

export default function IssuesDetails({route, navigation}) {
  const {id} = route.params;
  const [response, setResponse] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const goToMap = ({
    latitude = 12.952871815759643,
    longitude = 80.26012569108629,
  }) => {
    const url =
      'https://www.google.com/maps/search/?api=1&query=' +
      latitude +
      ',' +
      longitude;
    Linking.openURL(url);
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  const fetchData = async () => {
    try {
      const responsee = await axios.get(
        'https://run.mocky.io/v3/4f04eacf-e5d8-439b-b97e-25269a655172',
      );
      const data = responsee.data;
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (response) {
      const myData = response.filter(a => a.id == id);
      console.log(myData);
      setFiltered(...myData);
    }
  }, [response]);
  return (
    <View style={styles.root}>
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
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('IssuesList')}>
              <Image
                style={styles.backArrow}
                source={require('../../assets/images/arrowRight.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Issuse</Text>
        </View>
        <View style={styles.spiltContainer}>
          <ScrollView>
            <View style={styles.paddingBlock}>
              <View style={styles.headTagContainer}>
                <View style={styles.headings}>
                  <Text style={styles.heading}>{filtered?.title}</Text>
                  <View style={styles.subHeadingContainer}>
                    <View style={styles.borderRight}>
                      <Text style={styles.subHeading}>
                        ISSUE ID : {filtered?.id}
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.subHeading, {paddingLeft: 10}]}>
                        {filtered?.subTitle}
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Image
                    style={styles.moreIcon}
                    source={require('../../assets/images/moreVertical.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.borderBotom}></View>
            <View style={styles.paddingBlock}>
              <View style={styles.profileBlock}>
                <View style={styles.avaterBG}>
                  <Text style={styles.avaterText}>{filtered?.username[0]}</Text>
                </View>
                <View style={styles.profileDetails}>
                  <Text style={styles.profileName}>{filtered?.username}</Text>
                  <Text style={styles.date}>{filtered?.date}</Text>
                </View>
                <View>
                  <Image
                    style={styles.rightIcon}
                    source={require('../../assets/images/arrowLeft.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.borderBotom}></View>
            <View style={styles.paddingBlock}>
              <Text style={styles.relatedIssues}>Product Related Issue</Text>
            </View>
            <View
              style={{...styles.paddingBlock, paddingTop: 1, marginBottom: 20}}>
              <Text style={styles.message}>{filtered?.message}</Text>
            </View>
            <View style={styles.paddingBlock}>
              <View style={styles.navBtn}>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:${filtered?.phone}`)}
                    style={{
                      ...styles.buttonStyle,
                      backgroundColor: '#f27d351d',
                      color: '#f27d35',
                      borderColor: '#f27d351d',
                    }}
                    activeOpacity={0.6}>
                    <Image
                      source={require('../../assets/images/phone.png')}
                      style={styles.buttonImageIconStyle}
                    />
                    <Text style={{...styles.buttonTextStyle, color: '#f27d35'}}>
                      Call
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{...styles.btnContainer, marginHorizontal: 8}}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.6}>
                    <Image
                      source={require('../../assets/images/messageCircle.png')}
                      style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>Chat</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      goToMap(filtered?.latitude, filtered?.longitude)
                    }
                    style={styles.buttonStyle}
                    activeOpacity={0.6}>
                    <Image
                      source={require('../../assets/images/cornerUpRight.png')}
                      style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>Direction</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <CustomButton
            title="Set Status"
            color="#fff"
            height={50}
            bgColor="#353596"
            paddingVertical={15}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  paddingBlock: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  headTagContainer: {
    flexDirection: 'row',
  },
  headings: {
    flex: 1,
  },
  moreIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  heading: {
    fontFamily: 'ProximaNova',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#363a57',
    lineHeight: 28,
  },
  subHeadingContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  subHeading: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9297a5',
    marginRight: 10,
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: '#cecece',
  },
  borderBotom: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.06)',
  },
  profileBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avaterBG: {
    width: 50,
    height: 50,
    backgroundColor: '#e3aa3f',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avaterText: {
    fontFamily: 'ProximaNova',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#FFF',
    textAlign: 'center',
  },
  profileDetails: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileName: {
    fontFamily: 'ProximaNova',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#363a57',
    marginBottom: 3,
  },
  date: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9297a5',
  },
  rightIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  relatedIssues: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#28a9c1',
  },
  message: {
    fontFamily: 'ProximaNova',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 28,
    color: '#363a57',
  },
  navBtn: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space',
  },
  btnContainer: {
    flex: 1,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: 'rgba(37, 43, 67, 0.10)',
    height: 45,
    borderRadius: 6,
    alignSelf: 'flex-start',
    paddingRight: 15,
    paddingLeft: 10,
  },
  buttonImageIconStyle: {
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#363a57',
    marginBottom: 4,
    marginLeft: 3,
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 28,
  },
  spiltContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
