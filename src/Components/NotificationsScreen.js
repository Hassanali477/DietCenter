import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const NotificationsScreen = () => {
  const [language, setLanguage] = useState('english');
  const data = [
    {
      id: 1,
      cardImg: 'cake',
      text:
        language === 'english'
          ? 'Lorem ipsum dolor sit amet consectetur. Adipiscing sit nisl diam.'
          : 'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة.',
      cardTime: language === 'english' ? '5:30 pm' : '5:30 مساءا',
    },
    {
      id: 2,
      cardImg: 'break_fast',
      text:
        language === 'english'
          ? 'Lorem ipsum dolor sit amet consectetur. Adipiscing sit nisl diam.'
          : 'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة.',
      cardTime: language === 'english' ? '5:30 pm' : '5:30 مساءا',
    },
    {
      id: 3,
      cardImg: 'apple',
      text:
        language === 'english'
          ? 'Lorem ipsum dolor sit amet consectetur. Adipiscing sit nisl diam.'
          : 'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة.',
      cardTime: language === 'english' ? '5:30 pm' : '5:30 مساءا',
    },
    {
      id: 4,
      cardImg: 'break_fast2',
      text:
        language === 'english'
          ? 'Lorem ipsum dolor sit amet consectetur. Adipiscing sit nisl diam.'
          : 'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة.',
      cardTime: language === 'english' ? '5:30 pm' : '5:30 مساءا',
    },
    {
      id: 5,
      cardImg: 'break_fast3',
      text:
        language === 'english'
          ? 'Lorem ipsum dolor sit amet consectetur. Adipiscing sit nisl diam.'
          : 'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة.',
      cardTime: language === 'english' ? '5:30 pm' : '5:30 مساءا',
    },
    {
      id: 6,
      cardImg: 'break_fast4',
      text:
        language === 'english'
          ? 'Lorem ipsum dolor sit amet consectetur. Adipiscing sit nisl diam.'
          : 'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة.',
      cardTime: language === 'english' ? '5:30 pm' : '5:30 مساءا',
    },
  ];

  const getCardImage = cardImg => {
    switch (cardImg) {
      case 'cake':
        return require('../Assets/Images/cake.png');
      case 'break_fast':
        return require('../Assets/Images/break_fast.png');
      case 'apple':
        return require('../Assets/Images/apple.png');
      case 'break_fast2':
        return require('../Assets/Images/break_fast2.png');
      case 'break_fast3':
        return require('../Assets/Images/break_fast3.png');
      case 'break_fast4':
        return require('../Assets/Images/break_fast4.png');
      default:
        return null;
    }
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.cardContainer,
          {flexDirection: language === 'english' ? 'row' : 'row-reverse'},
        ]}>
        <Image
          source={getCardImage(item.cardImg)}
          style={[
            styles.cardImage,
            {alignSelf: language === 'english' ? 'flex-start' : 'flex-end'},
          ]}
        />
        <View style={styles.cardTextContainer}>
          <Text
            style={[
              styles.cardText,
              {
                alignSelf: language === 'english' ? 'flex-start' : 'flex-end',
                marginRight: language === 'english' ? 0 : 15,
              },
            ]}>
            {item.text}
          </Text>
          <Text
            style={[
              styles.cardTime,
              {
                alignSelf: language === 'english' ? 'flex-start' : 'flex-end',
                marginRight: language === 'english' ? 0 : 15,
              },
            ]}>
            {item.cardTime}
          </Text>
        </View>
      </View>
    );
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage =>
      prevLanguage === 'english' ? 'arabic' : 'english',
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.languageButton} onPress={toggleLanguage}>
        <Text style={styles.languageButtonText}>
          {language === 'english' ? 'Switch to Arabic' : 'Switch to English'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
  },
  languageButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  languageButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderWidth: 0.3,
    borderColor: 'rgba(21, 75, 38, 0.1)',
    borderRadius: 20,
  },
  cardImage: {
    width: width * 0.18,
    height: width * 0.18,
    resizeMode: 'contain',
    borderRadius: 11,
  },
  cardTextContainer: {
    marginLeft: 15,
  },
  cardText: {
    fontSize: width * 0.035,
    width: '60%',
    color: 'rgba(3, 11, 6, 1)',
    lineHeight: width * 0.05,
    fontWeight: '400',
    fontFamily: 'Careem',
    marginTop: 5,
  },
  cardTime: {
    color: 'rgba(130, 142, 157, 1)',
    fontFamily: 'Careem',
    fontSize: width * 0.03,
    fontWeight: '400',
    lineHeight: width * 0.035,
    marginTop: 10,
  },
});
