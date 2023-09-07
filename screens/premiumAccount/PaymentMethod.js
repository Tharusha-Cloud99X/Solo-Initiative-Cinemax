import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PaymentMethod = () => {
  const navigation = useNavigation();

  const [activeCard, setActiveCard] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const back = require('../../assets/images/BackArrow.png');
  const visa = require('../../assets/images/VISA.png');
  const mc = require('../../assets/images/MASTERCARD.png');
  const radio = require('../../assets/images/Radio.png');
  const radio1 = require('../../assets/images/Radio1.png');
  const plus = require('../../assets/images/plus.png');
  const tick = require('../../assets/images/tick1.png');
  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PremiumAccount')}>
            <Image source={back} />
          </TouchableOpacity>
          <Text style={styles.title}>Payment Method</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={{gap: 16, marginTop: 38}}>
          <Text style={styles.premium}>Payment Confirm</Text>
          <Text style={styles.textStyle1}>
            Enjoy the viewing experience after you confirm the payment
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <View
            style={
              activeCard === 1
                ? [styles.card, {borderColor: '#12CDD9'}]
                : styles.card
            }>
            <Image source={visa} />
            <Text style={styles.textStyle2}>•••• •••• •••• 87652</Text>
            {activeCard === 1 ? (
              <TouchableOpacity>
                <Image source={radio} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setActiveCard(1)}>
                <Image source={radio1} />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={
              activeCard === 2
                ? [styles.card, {borderColor: '#12CDD9'}]
                : styles.card
            }>
            <Image source={mc} />
            <Text style={styles.textStyle2}>•••• •••• •••• 87652</Text>
            {activeCard === 2 ? (
              <TouchableOpacity>
                <Image source={radio} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setActiveCard(2)}>
                <Image source={radio1} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.card1}>
            <Image source={plus} />
            <Text style={styles.textStyle3}>Add New</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
          <Text style={styles.btnText}>Purchase Now</Text>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={{flex: 1, backgroundColor: 'rgba(31,29,43, 0.9)'}}>
            <View style={styles.centeredModal}>
              <View style={styles.modalView}>
                <Image source={tick} />
                <View style={{gap: 12}}>
                  <Text style={styles.textStyle4}>
                    Your payment has completed!
                  </Text>
                  <Text style={styles.textStyle5}>
                    Ullamcorper imperdiet urna id non sed est sem. Rhoncus amet,
                    enim purus gravida donec aliquet.
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => setOpen(false)}>
                  <Text style={styles.btnText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  header: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  premium: {
    backgroundColor: '#FF8700',
    color: '#fff',
    borderRadius: 6,
    width: 186,
    height: 28,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    alignSelf: 'center',
    width: 273,
    textAlign: 'center',
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  cardContainer: {
    marginTop: 48,
    gap: 16,
    alignSelf: 'center',
  },
  card: {
    height: 79,
    width: 327,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(37, 40, 54, 1)',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#252836',
    flexDirection: 'row',
    padding: 24,
  },
  card1: {
    height: 79,
    width: 327,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(37, 40, 54, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252836',
    flexDirection: 'row',
    gap: 10,
  },
  textStyle2: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  button: {
    width: 327,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#12CDD9',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 40,
  },
  button1: {
    width: 130,
    height: 60,
    borderRadius: 32,
    backgroundColor: '#12CDD9',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#252836',
    borderRadius: 16,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    gap: 32,
  },
  textStyle4: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#fff',
    width: 273,
    textAlign: 'center',
  },
  textStyle5: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#92929D',
    width: 271,
    textAlign: 'center',
  },
});
export default PaymentMethod;
