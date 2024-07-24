import React from 'react';
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

  const ordersData = [
    {
      id: 1,
      title: 'SMART Diet Plan',
      subtitle: 'Full Days - 20 Days',
      additionalText: 'Ongoing',
      orderId: 'Order #89244',
      orderDate: '2024/01/29',
      status: 'ongoing',
      statusColor: '#0094D9',
    },
    {
      id: 2,
      title: 'SMART Diet Plan',
      subtitle: 'Full Days - 20 Days',
      additionalText: 'Pending',
      orderId: 'Order #89244',
      orderDate: '2024/01/30',
      status: 'pending',
      statusColor: '#E37B1C',
    },
    {
      id: 3,
      title: 'SMART Diet Plan',
      subtitle: 'Full Days - 20 Days',
      additionalText: 'Completed',
      orderId: 'Order #89244',
      orderDate: '2024/01/31',
      status: 'completed',
      statusColor: '#23AE00',
    },
    {
      id: 4,
      title: 'SMART Diet Plan',
      subtitle: 'Full Days - 20 Days',
      additionalText: 'Cancelled',
      orderId: 'Order #89244',
      orderDate: '2024/02/01',
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
      onPress={() => navigation.navigate('OrderDetails', {order: item})}>
      <View style={styles.cardContainer}>
        <View style={styles.topContent}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={{color: item.statusColor, fontWeight: '400'}}>
              {item.additionalText}
            </Text>
            {renderStatusIcon(item.status)}
          </View>
        </View>
        <View style={styles.dottedBorder} />
        <View style={styles.bottomContent}>
          <View style={styles.orderInfo}>
            <Text style={styles.orderId}>{item.orderId}</Text>
            <Text style={styles.orderDate}>{item.orderDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
  statusContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center', // Align items to center
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
});

export default OrdersFlatlist;
