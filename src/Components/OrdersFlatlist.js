import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const OrdersFlatlist = () => {
  const navigation = useNavigation();

  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(prevLanguage =>
      prevLanguage === 'english' ? 'arabic' : 'english',
    );
  };

  const ordersData = [
    {
      id: 1,
      title: language === 'english' ? 'SMART Diet Plan' : 'خطة نظام غذائي ذكي',
      subtitle:
        language === 'english' ? 'Full Days - 20 Days' : 'أيام كاملة - 20 يوم',
      additionalText: language === 'english' ? 'Ongoing' : 'قيد التنفيذ',
      orderId: language === 'english' ? 'Order #89244' : 'الطلب #89244',
      orderDate: language === 'english' ? '2024/01/29' : '2024/يناير/29',
      status: 'ongoing',
      statusColor: '#0094D9',
    },
    {
      id: 2,
      title: language === 'english' ? 'SMART Diet Plan' : 'خطة نظام غذائي ذكي',
      subtitle:
        language === 'english' ? 'Full Days - 20 Days' : 'أيام كاملة - 20 يوم',
      additionalText: language === 'english' ? 'Pending' : 'قيد الانتظار',
      orderId: language === 'english' ? 'Order #89244' : 'الطلب #89244',
      orderDate: language === 'english' ? '2024/01/30' : '2024/فبراير/30',
      status: 'pending',
      statusColor: '#E37B1C',
    },
    {
      id: 3,
      title: language === 'english' ? 'SMART Diet Plan' : 'خطة نظام غذائي ذكي',
      subtitle:
        language === 'english' ? 'Full Days - 20 Days' : 'أيام كاملة - 20 يوم',
      additionalText: language === 'english' ? 'Completed' : 'مكتمل',
      orderId: language === 'english' ? 'Order #89244' : 'الطلب #89244',
      orderDate: language === 'english' ? '2024/01/31' : '2024/مارس/31',
      status: 'completed',
      statusColor: '#23AE00',
    },
    {
      id: 4,
      title: language === 'english' ? 'SMART Diet Plan' : 'خطة نظام غذائي ذكي',
      subtitle:
        language === 'english' ? 'Full Days - 20 Days' : 'أيام كاملة - 20 يوم',
      additionalText: language === 'english' ? 'Cancelled' : 'ملغي',
      orderId: language === 'english' ? 'Order #89244' : 'الطلب #89244',
      orderDate: language === 'english' ? '2024/02/01' : '2024/أبريل/01',
      status: 'cancelled',
      statusColor: '#E6352B',
    },
  ];

  const renderStatusIcon = status => {
    let iconSource;
    switch (status) {
      case 'ongoing':
        iconSource = require('../Assets/Icons/clockIcon.png');
        break;
      case 'completed':
        iconSource = require('../Assets/Icons/checkIcon.png');
        break;
      case 'pending':
        iconSource = require('../Assets/Icons/pendingIcon.png');
        break;
      case 'cancelled':
        iconSource = require('../Assets/Icons/crossIcon.png');
        break;
      default:
        iconSource = null;
    }
    return (
      <Image source={iconSource} style={styles.icon} resizeMode="contain" />
    );
  };

  const renderCard = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', {order: item, language})}>
      <View style={styles.cardContainer}>
        <View
          style={[
            styles.topContent,
            {flexDirection: language === 'english' ? 'row' : 'row-reverse'},
          ]}>
          <View
            style={
              language === 'english'
                ? styles.infoContainer
                : styles.infoContainerArabic
            }>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
          <View
            style={
              language === 'english'
                ? styles.statusContainer
                : styles.statusContainerArabic
            }>
            <Text
              style={{
                color: item.statusColor,
                fontWeight: '400',
                marginRight: 10,
              }}>
              {item.additionalText}
            </Text>
            {renderStatusIcon(item.status)}
          </View>
        </View>
        <View style={styles.dottedBorder} />
        <View
          style={[
            styles.bottomContent,
            {flexDirection: language === 'english' ? 'row' : 'row-reverse'},
          ]}>
          <View
            style={
              language === 'english' ? styles.orderInfo : styles.orderInfoArabic
            }>
            <Text style={styles.orderId}>{item.orderId}</Text>
            <Text style={styles.orderDate}>{item.orderDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleLanguage}
        style={styles.languageTouchable}>
        <Text style={styles.languageText}>
          {language === 'english' ? 'العربية' : 'English'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={ordersData}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: width,
    height: height,
  },
  cardContainer: {
    width: width * 0.85,
    padding: 20,
    marginBottom: 18,
    borderColor: 'rgba(147, 193, 69, 0.1)',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20, // Increased radius for smoother corners
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {width: 0, height: 4}, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  infoContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  infoContainerArabic: {
    justifyContent: 'space-between',
    flex: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items to center
  },
  statusContainerArabic: {
    flexDirection: 'row-reverse',
    alignItems: 'center', // Align items to center
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContentArabic: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  statusText: {
    textTransform: 'capitalize',
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  orderInfoArabic: {
    flexDirection: 'row-reverse',
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
    borderColor: '#154B26',
    marginTop: 15,
    marginBottom: 20,
  },
  languageTouchable: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(147, 193, 69, 1)',
    borderRadius: 5,
  },
});

export default OrdersFlatlist;
