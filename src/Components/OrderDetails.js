import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const OrderDetails = () => {
  const route = useRoute();
  const {order} = route.params; // Get the order data from navigation params
  const navigation = useNavigation();

  // Function to get status icon based on order status
  const getStatusIcon = status => {
    switch (status) {
      case 'ongoing':
        return require('../Assets/Icons/clockIcon.png');
      case 'completed':
        return require('../Assets/Icons/checkIcon.png');
      case 'pending':
        return require('../Assets/Icons/pendingIcon.png');
      case 'cancelled':
        return require('../Assets/Icons/crossIcon.png');
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.goBackText}>{`<--`}</Text>
        </TouchableOpacity>
        <View style={styles.cardWrapper}>
          <View style={styles.cardContainer}>
            <View style={styles.topContent}>
              <View>
                <Text style={styles.title}>{order.title}</Text>
                <Text style={styles.subtitle}>{order.subtitle}</Text>
              </View>
              <View style={styles.statusContainer}>
                <Text style={[styles.statusText, {color: order.statusColor}]}>
                  {order.additionalText}
                </Text>
                <Image
                  source={getStatusIcon(order.status)}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.dottedBorder} />
            <View style={styles.bottomContent}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderId}>{order.orderId}</Text>
                <Text style={styles.orderDate}>{order.orderDate}</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.bottomLine} />
            <View style={styles.detailsRow}>
              <View style={styles.detailsLabels}>
                <Text style={styles.summaryHeading}>Item Total</Text>
                <Text style={styles.summaryHeading}>Day Type</Text>
                <Text style={styles.summaryHeading}>No. of Days</Text>
                <Text style={styles.summaryHeading}>Delivery Fees</Text>
              </View>
              <View style={styles.detailsValues}>
                <Text style={styles.summaryValue}>SR 1330.50</Text>
                <Text style={styles.summaryValue}>Full Days</Text>
                <Text style={styles.summaryValue}>20 Days</Text>
                <Text style={styles.summaryValue}>SR 00.00</Text>
              </View>
            </View>
            <View style={styles.bottomLine} />
            <View style={styles.summaryRow}>
              <View style={styles.summaryContainer}>
                <Text style={styles.summaryHeading}>Sub Total</Text>
                <Text style={styles.summaryHeading}>Tax (15%)</Text>
              </View>
              <View style={styles.summaryValues}>
                <Text style={styles.summaryValue}>SR 1330.50</Text>
                <Text style={styles.summaryValue}>SR 199.58</Text>
              </View>
            </View>
            <View style={[styles.bottomLine, styles.totalRowLine]} />
            <View style={styles.totalRow}>
              <Text style={[styles.summaryHeading, styles.totalHeading]}>
                Total
              </Text>
              <Text style={[styles.summaryValue, styles.totalValue]}>
                SR 1530.08
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '95%',
  },
  goBackButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#666',
    padding: 15,
    borderRadius: 50,
  },
  goBackText: {
    fontSize: 20,
    color: '#fff',
  },
  cardWrapper: {
    width: '100%',
    backgroundColor: 'rgba(147, 193, 69, 0.1)',
    padding: 15,
    height: height * 0.57,
    borderRadius: 15,
  },
  cardContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 10,
    borderColor: 'rgba(147, 193, 69, 0.1)',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: height * 0.18,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontWeight: '400',
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  orderId: {
    fontSize: 14,
    color: '#154B26',
    fontFamily: 'Careem Bold',
    fontWeight: '700',
  },
  orderDate: {
    fontSize: 14,
    color: '#828E9D',
    fontWeight: '400',
  },
  title: {
    fontSize: 16,
    color: '#030B06',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#030B06',
    fontWeight: '500',
    marginBottom: 5,
  },
  dottedBorder: {
    borderWidth: 0.58,
    borderStyle: 'dashed',
    borderColor: 'rgba(21, 75, 38, 0.3)',
    marginBottom: 15,
  },
  detailsContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsLabels: {
    flexDirection: 'column',
    width: '50%',
  },
  detailsValues: {
    flexDirection: 'column',
    width: '50%',
    alignItems: 'flex-end',
  },
  bottomLine: {
    borderWidth: 0.2,
    borderColor: 'rgba(21, 75, 38, 0.3)',
    marginTop: 10,
    borderStyle: 'solid',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  summaryContainer: {
    flexDirection: 'column',
    width: '50%',
  },
  summaryHeading: {
    fontSize: 16,
    color: 'rgba(56, 56, 56, 0.8)',
    fontWeight: '400',
    marginBottom: 10,
  },
  totalHeading: {
    color: 'rgba(21, 75, 38, 1)',
    fontWeight: '700',
  },
  summaryValues: {
    flexDirection: 'column',
    width: '50%',
    alignItems: 'flex-end',
  },
  summaryValue: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    marginBottom: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalRowLine: {
    borderWidth: 0.3,
    borderColor: 'rgba(21, 75, 38, 0.3)',
    marginVertical: 10,
    borderStyle: 'dashed',
  },
  totalValue: {
    color: 'rgba(21, 75, 38, 1)',
    fontWeight: '700',
  },
});

export default OrderDetails;
