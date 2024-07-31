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

const translations = {
  en: {
    itemTotal: 'Item Total',
    dayType: 'Day Type',
    numOfDays: 'No. of Days',
    deliveryFees: 'Delivery Fees',
    subTotal: 'Sub Total',
    tax: 'Tax (15%)',
    total: 'Total',
    itemTotalValue: 'SR 1330.50',
    dayTypeValue: 'Full Days',
    numOfDaysValue: '20 Days',
    deliveryFeesValue: 'SR 00.00',
    subTotalValue: 'SR 1330.50',
    taxValue: 'SR 199.58',
    totalValue: 'SR 1530.08',
  },
  ar: {
    itemTotal: 'إجمالي العناصر',
    dayType: 'نوع اليوم',
    numOfDays: 'عدد الأيام',
    deliveryFees: 'رسوم التوصيل',
    subTotal: 'الإجمالي الفرعي',
    tax: 'الضريبة (15%)',
    total: 'المجموع',
    itemTotalValue: '1330.50 ريال',
    dayTypeValue: 'أيام كاملة',
    numOfDaysValue: '20 يوما',
    deliveryFeesValue: '00.00 ريال',
    subTotalValue: '1330.50 ريال',
    taxValue: '199.58 ريال',
    totalValue: '1530.08 ريال',
  },
};

const OrderDetails = () => {
  const route = useRoute();
  const {order, language} = route.params;
  const navigation = useNavigation();
  const trans = translations[language === 'arabic' ? 'ar' : 'en'];

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
            <View
              style={[
                styles.detailsRow,
                {flexDirection: language === 'arabic' ? 'row-reverse' : 'row'},
              ]}>
              <View style={styles.detailsLabels}>
                <Text style={styles.summaryHeading}>{trans.itemTotal}</Text>
                <Text style={styles.summaryHeading}>{trans.dayType}</Text>
                <Text style={styles.summaryHeading}>{trans.numOfDays}</Text>
                <Text style={styles.summaryHeading}>{trans.deliveryFees}</Text>
              </View>
              <View style={styles.detailsValues}>
                <Text style={styles.summaryValue}>{trans.itemTotalValue}</Text>
                <Text style={styles.summaryValue}>{trans.dayTypeValue}</Text>
                <Text style={styles.summaryValue}>{trans.numOfDaysValue}</Text>
                <Text style={styles.summaryValue}>
                  {trans.deliveryFeesValue}
                </Text>
              </View>
            </View>
            <View style={styles.bottomLine} />
            <View
              style={[
                styles.summaryRow,
                {flexDirection: language === 'arabic' ? 'row-reverse' : 'row'},
              ]}>
              <View style={styles.summaryContainer}>
                <Text style={styles.summaryHeading}>{trans.subTotal}</Text>
                <Text style={styles.summaryHeading}>{trans.tax}</Text>
              </View>
              <View style={styles.summaryValues}>
                <Text style={styles.summaryValue}>{trans.subTotalValue}</Text>
                <Text style={styles.summaryValue}>{trans.taxValue}</Text>
              </View>
            </View>
            <View style={[styles.bottomLine, styles.totalRowLine]} />
            <View
              style={[
                styles.totalRow,
                {flexDirection: language === 'arabic' ? 'row-reverse' : 'row'},
              ]}>
              <Text style={[styles.summaryHeading, styles.totalHeading]}>
                {trans.total}
              </Text>
              <Text style={[styles.summaryValue, styles.totalValue]}>
                {trans.totalValue}
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsLabels: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  detailsValues: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  summaryRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  bottomLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E2E8F3',
    marginTop: 15,
  },
  summaryHeading: {
    fontSize: 14,
    color: '#828E9D',
    fontWeight: '400',
    marginBottom: 10,
  },
  summaryValue: {
    fontSize: 14,
    color: '#030B06',
    fontWeight: '400',
    marginBottom: 10,
  },
  summaryContainer: {
    flexDirection: 'column',
  },
  summaryValues: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  totalRowLine: {
    marginTop: 20,
    marginBottom: 15,
  },
  totalHeading: {
    fontWeight: '700',
    fontSize: 16,
  },
  totalValue: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default OrderDetails;
