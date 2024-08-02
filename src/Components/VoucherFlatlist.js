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

const {width} = Dimensions.get('screen');

const VoucherFlatlist = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(prevLanguage =>
      prevLanguage === 'english' ? 'arabic' : 'english',
    );
  };

  const voucherData = [
    {
      id: 1,
      title: language === 'english' ? 'Offers' : 'عروض',
      discount: '20%',
      content:
        language === 'english'
          ? `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`
          : `لوريم إيبسوم ببساطة نص شكلي يستخدم في طباعة النصوص وتركيبها. لوريم إيبسوم كان النص القياسي للطباعة`,
    },
    {
      id: 2,
      title: language === 'english' ? 'Offers' : 'عروض',
      discount: '20%',
      content:
        language === 'english'
          ? `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`
          : `لوريم إيبسوم ببساطة نص شكلي يستخدم في طباعة النصوص وتركيبها. لوريم إيبسوم كان النص القياسي للطباعة`,
    },
    {
      id: 3,
      title: language === 'english' ? 'Offers' : 'عروض',
      discount: '20%',
      content:
        language === 'english'
          ? `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`
          : `لوريم إيبسوم ببساطة نص شكلي يستخدم في طباعة النصوص وتركيبها. لوريم إيبسوم كان النص القياسي للطباعة`,
    },
    {
      id: 4,
      title: language === 'english' ? 'Offers' : 'عروض',
      discount: '20%',
      content:
        language === 'english'
          ? `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`
          : `لوريم إيبسوم ببساطة نص شكلي يستخدم في طباعة النصوص وتركيبها. لوريم إيبسوم كان النص القياسي للطباعة`,
    },
  ];

  const renderVoucherIcon = () => {
    return (
      <Image
        source={require('../Assets/Icons/offerIcon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
    );
  };

  const renderArrowIcon = () => {
    return (
      <Image
        source={require('../Assets/Icons/Arrow-black-right.png')}
        style={[
          styles.arrowIcon,
          language === 'arabic' && styles.arrowIconArabic,
        ]}
        resizeMode="contain"
      />
    );
  };

  const renderVoucherItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <View
          style={[
            styles.topContent,
            {flexDirection: language === 'english' ? 'row' : 'row-reverse'},
          ]}>
          <View
            style={[
              styles.iconContainer,
              styles.changeBackground,
              {flexDirection: language === 'english' ? 'row' : 'row-reverse'},
            ]}>
            {renderVoucherIcon()}
          </View>
          <View
            style={[
              styles.titleContainer,
              {flexDirection: language === 'english' ? 'row' : 'row-reverse'},
            ]}>
            <Text
              style={[styles.title, language === 'arabic' && {marginLeft: 5}]}>
              {item.title}
            </Text>
          </View>
          <View style={styles.iconContainer}>{renderArrowIcon()}</View>
        </View>
        <View
          style={[
            styles.bottomContent,
            {alignItems: language === 'english' ? 'flex-start' : 'flex-end'},
          ]}>
          <Text
            style={[
              styles.content,
              {textAlign: language === 'english' ? 'left' : 'right'},
            ]}>
            {item.content}
          </Text>
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
        data={voucherData}
        renderItem={renderVoucherItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('ClinicFlatlist')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardContainer: {
    width: width * 0.9,
    padding: 20,
    marginBottom: 18,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(21, 75, 38, 0.1)',
    borderRadius: 20,
    shadowColor: 'rgba(147, 193, 69, 0.15)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  topContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 37,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(147, 193, 69, 0.1)',
    borderRadius: 50,
    padding: 22,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: 'rgba(147, 193, 69, 1)',
    alignSelf: 'flex-start',
  },
  bottomContent: {
    marginTop: 5,
    width: '100%',
  },
  content: {
    fontSize: 14,
    color: 'rgba(130, 142, 157, 1)',
    fontFamily: 'Careem',
    fontWeight: '400',
    lineHeight: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  arrowIconArabic: {
    width: 20,
    height: 20,
    tintColor: '#000',
    transform: [{rotate: '180deg'}],
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
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default VoucherFlatlist;
