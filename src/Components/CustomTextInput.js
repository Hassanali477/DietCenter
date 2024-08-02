import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const CustomTextInput = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
  const [language, setLanguage] = useState('english');

  const onGenderSelect = gender => {
    setSelectedGender(prevGender => (prevGender === gender ? null : gender));
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage =>
      prevLanguage === 'english' ? 'arabic' : 'english',
    );
  };

  const translations = {
    english: {
      heading: 'Choose Your Gender',
      male: 'Male',
      female: 'Female',
    },
    arabic: {
      heading: 'اختر جنسك',
      male: 'ذكر',
      female: 'أنثى',
    },
  };

  const currentTranslations = translations[language];
  const layoutDirection = language === 'arabic' ? 'row-reverse' : 'row';

  return (
    <View style={styles.container}>
      <View style={styles.languageSwitchContainer}>
        <Button
          title={
            language === 'arabic' ? 'Switch to English' : 'Switch to Arabic'
          }
          onPress={toggleLanguage}
        />
      </View>
      <View style={styles.headingTitleContainer}>
        <Text
          style={
            language === 'arabic'
              ? styles.headingTitleAr
              : styles.headingTitleEn
          }>
          {currentTranslations.heading}
        </Text>
      </View>
      <View style={styles.subContainer}>
        {['male', 'female'].map(gender => (
          <TouchableOpacity
            key={gender}
            style={[styles.selectTextInput, {flexDirection: layoutDirection}]}
            onPress={() => onGenderSelect(gender)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={
                  gender === 'male'
                    ? require('../Assets/Icons/Male.png')
                    : require('../Assets/Icons/Female.png')
                }
                style={styles.icon}
                resizeMode="contain"
              />
              <Text
                style={
                  language === 'arabic'
                    ? styles.genderTextAr
                    : styles.genderText
                }>
                {currentTranslations[gender]}
              </Text>
            </View>
            <View
              style={
                selectedGender === gender ? styles.checked : styles.unchecked
              }>
              {selectedGender === gender && (
                <Image
                  source={require('../Assets/Icons/White-Check-Icon.png')}
                  resizeMode="contain"
                  style={styles.checkIcon}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('HomeScreenCard')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
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
    height: height,
    width: width,
  },
  languageSwitchContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  headingTitleContainer: {
    width: width * 0.9,
    paddingVertical: 10,
    marginBottom: 5,
  },
  headingTitleAr: {
    color: 'rgba(3, 11, 6, 1)',
    fontSize: 18,
    fontFamily: 'Careem',
    fontWeight: '700',
    textAlign: 'right',
  },
  headingTitleEn: {
    color: 'rgba(3, 11, 6, 1)',
    fontSize: 18,
    fontFamily: 'Careem',
    fontWeight: '700',
    textAlign: 'left',
  },
  subContainer: {
    width: '100%',
    height: height * 0.2,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectTextInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(21, 75, 38, 0.2)',
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  genderTextAr: {
    color: 'rgba(3, 11, 6, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Careem',
    marginRight: 10,
    textAlign: 'right',
  },
  genderText: {
    fontSize: 18,
    color: 'rgba(21, 75, 38, 1)',
    fontWeight: '400',
    fontFamily: 'Careem',
    marginLeft: 10,
    textAlign: 'left',
  },
  checked: {
    backgroundColor: 'rgba(147, 193, 69, 1)',
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  unchecked: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(21, 75, 38, 0.2)',
    marginHorizontal: 10,
  },
  checkIcon: {
    width: 18,
    height: 18,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default CustomTextInput;
