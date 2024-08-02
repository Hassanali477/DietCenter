import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const cardWidth = width * 0.45; // Adjust the width as needed
const cardHeight = height * 0.31; // Adjust the height as needed
const imageHeight = height * 0.165; // Adjust the height as needed

const HomeScreenCard = () => {
  const navigation = useNavigation();
  const [selectedCard, setSelectedCard] = useState(1); // Set the first card as the default selected card
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(prevLanguage =>
      prevLanguage === 'english' ? 'arabic' : 'english',
    );
  };

  const data = [
    {
      id: 1,
      caloNum: '400',
      text: language === 'english' ? 'Calories' : 'سعرات حرارية',
      cardTitle:
        language === 'english'
          ? 'Chicken Kabab with Sauce'
          : 'كباب الدجاج مع الصلصة',
      cardimg: 'chicken_kabab',
    },
    {
      id: 2,
      caloNum: '400',
      text: language === 'english' ? 'Calories' : 'سعرات حرارية',
      cardTitle:
        language === 'english'
          ? 'Chicken Tikka with Sauce'
          : 'تيكا الدجاج مع الصلصة',
      cardimg: 'chicken_tikka',
    },
    {
      id: 3,
      caloNum: '400',
      text: language === 'english' ? 'Calories' : 'سعرات حرارية',
      cardTitle:
        language === 'english'
          ? 'Chicken Leg with Wings'
          : 'فخذ الدجاج مع الأجنحة',
      cardimg: 'chicken_leg',
    },
    {
      id: 4,
      caloNum: '400',
      text: language === 'english' ? 'Calories' : 'سعرات حرارية',
      cardTitle: language === 'english' ? 'Grilled Chicken' : 'دجاج مشوي',
      cardimg: 'grilled_chicken',
    },
    {
      id: 5,
      caloNum: '400',
      text: language === 'english' ? 'Calories' : 'سعرات حرارية',
      cardTitle: language === 'english' ? 'Grilled Chicken' : 'دجاج مشوي',
      cardimg: 'grilled_chicken',
    },
    {
      id: 6,
      caloNum: '400',
      text: language === 'english' ? 'Calories' : 'سعرات حرارية',
      cardTitle: language === 'english' ? 'Grilled Chicken' : 'دجاج مشوي',
      cardimg: 'grilled_chicken',
    },
  ];

  const getCardImage = cardimg => {
    switch (cardimg) {
      case 'chicken_kabab':
        return require('../Assets/Images/chicken_kabab.jpg');
      case 'chicken_tikka':
        return require('../Assets/Images/chicken_tikka.png');
      case 'chicken_leg':
        return require('../Assets/Images/chicken_leg.png');
      case 'grilled_chicken':
        return require('../Assets/Images/grilled_chicken.png');
      default:
        return null;
    }
  };

  const getIcon = iconflame => {
    switch (iconflame) {
      case 'iconflame':
        return require('../Assets/Icons/flameIcon.png');
      default:
        return null;
    }
  };

  const renderItem = ({item}) => {
    const isSelected = selectedCard === item.id;
    return (
      <TouchableOpacity onPress={() => setSelectedCard(item.id)}>
        <View
          style={[
            styles.flatlistContainer,
            {
              borderColor: isSelected
                ? 'rgba(147, 193, 69, 1)'
                : 'rgba(147, 193, 69, 0.3)', // Light green border for unselected cards
              borderWidth: isSelected ? 2 : 1, // Increase border width for selected card
            },
          ]}>
          <View style={styles.subContainer}>
            <Image
              source={getCardImage(item.cardimg)}
              style={styles.image}
              resizeMode="contain"
            />
            {isSelected && (
              <View
                style={{
                  position: 'absolute',
                  right: 19,
                  top: 20,
                  padding: 5,
                  height: 20,
                  backgroundColor: 'rgba(147, 193, 69, 1)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  style={{
                    width: 11,
                    height: 18,
                    zIndex: 1,
                  }}
                  source={require('../Assets/Icons/White-Check-Icon.png')}
                  resizeMode="contain"
                />
              </View>
            )}
            <View
              style={[
                styles.caloContainer,
                {flexDirection: language === 'english' ? 'row' : 'row-reverse'},
              ]}>
              <Image
                source={getIcon('iconflame')}
                style={styles.iconFlame}
                resizeMode="contain"
              />
              <View
                style={{
                  flexDirection: language === 'english' ? 'row' : 'row-reverse',
                }}>
                <Text style={styles.cardText}>
                  {language === 'english'
                    ? `${item.caloNum} ${item.text}`
                    : `${item.text} ${item.caloNum}`}
                </Text>
              </View>
            </View>
            <Text
              style={[
                styles.cardTitle,
                {
                  marginRight: language === 'arabic' ? 10 : undefined,
                  marginTop: 5,
                },
              ]}>
              {item.cardTitle}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {language === 'english' ? 'Button' : 'زر'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        key={(data.length % 2 === 0).toString()} // Add key prop to force re-render
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.buttonText1}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  flatlistContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: cardHeight,
    width: cardWidth,
    margin: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowColor: 'rgba(147, 193, 69, 0.15)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  subContainer: {
    height: cardHeight,
    width: cardWidth,
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 6,
  },
  image: {
    width: '100%',
    height: imageHeight,
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1)',
    marginLeft: 5,
  },
  caloContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: imageHeight - 25,
    left: 38,
    fontSize: 16,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 0.15,
    borderColor: '#ccc',
  },
  iconFlame: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginBottom: 2,
  },
  cardText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    padding: 5,
  },
  button: {
    borderWidth: 1,
    marginTop: 25,
    padding: 8,
    borderRadius: 50,
    borderColor: 'rgba(147, 193, 69, 1)',
    alignSelf: 'center',
    width: '90%',
    position: 'absolute',
    bottom: 22,
  },
  buttonText: {
    color: 'rgba(147, 193, 69, 1)',
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Careem',
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
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText1: {
    color: '#FFF',
    fontSize: 16,
  },
});
