import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// Sample address data
const addressUser = {
  address: [
    {
      address: 'Union Square',
      city: 'San Francisco',
      country: 'United States',
      district: '',
      isDefault: 'yes',
      latitude: 37.7858186,
      longitude: -122.4063558,
      name: 'Home',
      notes: 'San Francisco, 94102, United States',
      postal_code: '94102',
      province: 'California',
      street: '',
    },
    {
      address: 'Union Square',
      city: 'San Francisco',
      country: 'United States',
      district: '',
      isDefault: 'yes',
      latitude: 37.7858186,
      longitude: -122.4063558,
      name: 'Other',
      notes: 'San Francisco, 94102, United States',
      postal_code: '94102',
      province: 'California',
      street: '',
    },
    {
      address: 'Union Square',
      city: 'San Francisco',
      country: 'United States',
      district: '',
      isDefault: 'yes',
      latitude: 37.7858186,
      longitude: -122.4063558,
      name: 'Work',
      notes: 'San Francisco, 94102, United States',
      postal_code: '94102',
      province: 'California',
      street: '',
    },
    {
      address: 'D.H.A Phase II Extension',
      city: 'Karachi',
      country: 'Pakistan',
      district: 'Defence Housing Authority',
      isDefault: 'no',
      latitude: 24.8329816,
      longitude: 67.0717014,
      name: 'Hangout',
      notes: 'Defence Housing Authority, Karachi, 75500, Pakistan',
      postal_code: '75500',
      province: 'Sindh',
      street: '',
    },
  ],
};

const {width, height} = Dimensions.get('screen');

class FlatlistProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'english', // Default language
    };
  }

  toggleLanguage = () => {
    this.setState(prevState => ({
      language: prevState.language === 'english' ? 'arabic' : 'english',
    }));
  };

  renderIcon = name => {
    switch (name) {
      case 'Home':
        return require('../Assets/Icons/Profile-Home-Image.png');
      case 'Work':
        return require('../Assets/Icons/Profile-Office-Image.png');
      case 'Other':
        return require('../Assets/Icons/Profile-Other-Image.png');
      case 'Hangout':
        return require('../Assets/Icons/Profile-Other-Image.png'); // Example icon, adjust as per your requirement
      default:
        return require('../Assets/Icons/Profile-Other-Image.png'); // Default icon
    }
  };

  renderItem = ({item}) => {
    const {language} = this.state;
    const isArabic = language === 'arabic';
    const containerStyle = isArabic
      ? styles.itemContainerArabic
      : styles.itemContainer;
    const headingContainerStyle = isArabic
      ? styles.headingContainerArabic
      : styles.headingContainer;
    const arrowIconStyle = isArabic ? styles.arrowIconArabic : styles.arrowIcon;

    return (
      <View style={containerStyle}>
        <View style={styles.textContainer}>
          <View style={headingContainerStyle}>
            <Image
              source={this.renderIcon(item.name)}
              style={[styles.icon, isArabic && styles.iconArabic]}
            />
            <Text style={[styles.heading, isArabic && styles.headingArabic]}>
              {isArabic ? this.getArabicText(item.name) : item.name}
            </Text>
            {item.isDefault === 'yes' ? (
              <Text style={styles.defaultText}>
                {isArabic ? 'الأساسي' : 'DEFAULT'}
              </Text>
            ) : (
              <Image
                source={require('../Assets/Icons/Arrow-black-right.png')}
                style={arrowIconStyle}
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.subTextContainer}>
            <Text style={[styles.subText, isArabic && styles.subTextArabic]}>
              {isArabic ? this.getArabicText(item.notes) : item.notes}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  getArabicText = text => {
    switch (text) {
      case 'San Francisco, 94102, United States':
        return 'سان فرانسيسكو، 94102، الولايات المتحدة';
      case 'Defence Housing Authority, Karachi, 75500, Pakistan':
        return 'سلطة الإسكان الدفاعي، كراتشي، 75500، باكستان';
      default:
        return text;
    }
  };

  render() {
    const {language} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={this.toggleLanguage}>
          <Text style={styles.toggleButtonText}>
            {language === 'english' ? 'Switch to Arabic' : 'Switch to English'}
          </Text>
        </TouchableOpacity>
        <FlatList
          data={addressUser.address}
          renderItem={this.renderItem}
          keyExtractor={item => item.name} // Using name as key
          contentContainerStyle={styles.listContentContainer}
        />
      </View>
    );
  }
}

export default FlatlistProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingBottom: 24,
    width: '100%',
  },
  listContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    borderRadius: 20,
    marginBottom: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#93C145',
    backgroundColor: '#fff',
  },
  itemContainerArabic: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '85%',
    borderRadius: 8,
    marginBottom: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 16,
    marginLeft: 5,
  },
  iconArabic: {
    marginLeft: 15,
    marginRight: 0,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    paddingRight: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headingContainerArabic: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#154B26',
    flex: 1,
    textAlign: 'left', // Align left for English, since default is LTR
  },
  headingArabic: {
    textAlign: 'right', // Align right for Arabic, since default is RTL
  },
  subTextContainer: {
    width: '100%',
    alignSelf: 'flex-start',
    padding: 10,
  },
  subText: {
    fontSize: 14,
    color: '#828E9D',
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'left', // Align left for English, since default is LTR
  },
  subTextArabic: {
    textAlign: 'right', // Align right for Arabic, since default is RTL
  },
  defaultText: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#93C145',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    textTransform: 'uppercase',
    fontWeight: '400',
    letterSpacing: 1,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#000',
  },
  arrowIconArabic: {
    width: 20,
    height: 20,
    tintColor: '#000',
    transform: [{rotate: '180deg'}],
  },
  toggleButton: {
    alignSelf: 'center',
    backgroundColor: '#93C145',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
