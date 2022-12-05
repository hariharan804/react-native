import React from 'react';
import { 
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../components/Card';
import CustomButton from '../../components/customButton';
export const ServiceDetails = () => {
    const cardDetails= [{
        id:1,
        title:"Blood Test",
        quality:"Quantity : 17",
        rm:"RM 5"
    },
    {
        id:2,
        title:"BMI Checking",
        quality:"Quantity : 02",
        rm:"RM 5"
    },
    {
        id:3,
        title:"Skincare routine",
        quality:"Quantity : 24",
        rm:"RM 11"
    }
]
 
  const renderItem = ({ item }) => (
    <Card title={item.title} quality={item.quality} rm={item.rm} />
  );
  return (
    <>
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
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Service Details</Text>
          </View>
        </View>
        <View style={styles.productCard}>
          <View style={styles.productImageBlock}>
            <Image
              style={styles.productImage}
              source={require('../../assets/images/productImage.png')}
            />
          </View>
          <View style={styles.productDetailsBlock}>
            <Text style={styles.benifitText}>1000+ customer benefited</Text>
            <Text style={styles.productTitle}>
              Joint Pain relieve treatment.
            </Text>
            <Text style={styles.productCategory}>Practo Healthcare</Text>
            <Text style={styles.productDuration}>
              RM 45/ Mon{' '}
              <Text style={styles.productDurationDiscount}>RM 64/mon</Text>
            </Text>
            <View style={styles.btnGrp}>
              <CustomButton
                title="Add to Card"
                container={styles.addCardContainer}
                style={styles.addCard}
              />
              <CustomButton
                title="Enquire"
                container={styles.enqurieContainer}
                style={styles.enquire}
              />
            </View>
          </View>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.tcContainer}>
            <Text style={styles.tcTitle}>T&C</Text>
            <View style={styles.tcDesContainer}>
              <Text style={styles.tcDes}>
                Terms of service are the legal agreements between a service
                provider and a person who wants to use that service.{' '}
                <Text style={styles.viewDtl}>View More</Text>
              </Text>
            </View>
          </View>
          <View style={styles.includesContainer}>
            <Text style={styles.includesTitle}>Includes</Text>
            <FlatList
              data={cardDetails}
              renderItem={renderItem}
              keyExtractor={card => card.id}
            />
          </View>
        </View>
          <View>
            <CustomButton title="Buy Now" container={styles.buyBtnContainer} style={styles.buyBtn}/>
          </View>
      </View>
    </>
  );
};
export default ServiceDetails;
const styles = StyleSheet.create({
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
  backBtn: {flex: 1},
  titleBlock: {flex: 2},
  backArrow: {width: 24, height: 24, resizeMode: 'contain'},
  title: {
    fontFamily: 'ProximaNova',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#363a57',
  },
  productCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 19,
    paddingHorizontal: 27,
    marginBottom: 15,
  },
  productImageBlock: {
    flex: 1,
  },
  productDetailsBlock: {
    flex: 3,
    flexWrap: 'wrap',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  benifitText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9297a5',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderStyle: 'solid',
    borderRadius: 5,
    width: 'auto',
    marginTop: 1,
    marginBottom: 5,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  benifitText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9297a5',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderStyle: 'solid',
    borderRadius: 5,
    marginTop: 1,
    marginBottom: 2,
    paddingHorizontal: 8,
    paddingTop: 3,
    paddingBottom: 8,
  },
  productTitle: {
    fontFamily: 'ProximaNova',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#363a57',
    marginBottom: 2,
  },

  productCategory: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9297a5',
    marginBottom: 2,
  },
  productDuration: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: '#353596',
    marginTop: 2,
    marginBottom: 2,
  },
  productDurationDiscount: {
    fontFamily: 'ProximaNova',
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9297a5',
    paddingLeft: 30,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  btnGrp: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
  },
  addCardContainer: {
    borderWidth: 1,
    borderColor: '#ced1d8',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginRight: 14,
    marginTop: 1,
    marginBottom: 3,
    width: 105,
    height: 35,
  },
  addCard: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.8,
    color: '#252b43',
    textAlign: 'center',
  },
  enqurieContainer: {
    borderWidth: 1,
    borderColor: '#ced1d8',
    borderStyle: 'solid',
    backgroundColor: '#353596',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginRight: 5,
    marginTop: 1,
    marginBottom: 3,
    width: 105,
    height: 35,
  },
  enquire: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.8,
    textAlign: 'center',
    color: '#fff',
  },
  infoCard: {
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  tcContainer: {
    padding: 25,
  },
  tcTitle: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9097a5',
    marginBottom: 12,
  },
  includesTitle: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#9097a5',
    paddingHorizontal: 20,
  },
  tcDesContainer: {
    padding: 10,
    backgroundColor: '#9297a51b',
    borderRadius: 6,
  },
  tcDes: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.8,
    color: '#252b43',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  viewDtl: {
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#f27d35',
  },
  includesContainer: {
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  buyBtnContainer: {
    backgroundColor: '#353596',
    paddingVertical: 15,
    marginTop: 16,
  },
  buyBtn: {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.8,
    textAlign: 'center',
    color: '#fff',
  },
});
