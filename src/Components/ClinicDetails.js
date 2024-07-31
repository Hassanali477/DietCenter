import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

const {width} = Dimensions.get('screen');

const ClinicDetailsScreen = ({route}) => {
  const {item, language} = route.params;
  const isArabic = language === 'arabic';

  // Footer Card Content
  const renderDietitianCard = ({item}) => (
    <View style={styles.cardContainer}>
      <View style={styles.infoCard}>
        <Text style={styles.dietitianName}>{item.name}</Text>
        <Text style={styles.dietitianTitle}>{item.title}</Text>
        <Text style={styles.dietitianEducation}>{item.education}</Text>
      </View>
      <View style={styles.experienceCard}>
        <Image
          source={require('../Assets/Icons/GreenLightIcon.png')}
          style={[
            language === 'arabic' ? styles.arabicStyle : styles.englishStyle,
            {
              width: 50,
              height: 50,
              marginBottom: 10,
            },
          ]}
          resizeMode="contain"
        />
        <Text style={styles.dietitianExperience}>{item.experience}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        isArabic && styles.containerRTL,
      ]}>
      <Image source={{uri: item.img}} style={styles.image} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <View>
          <Text style={[styles.title, isArabic && styles.titleRTL]}>
            {item.name}
          </Text>
          <Text style={styles.description}>{item.address.text}</Text>
          {/* Closed Time or Open Time */}
          <View
            style={[
              styles.openTimeContainer,
              isArabic && styles.openTimeContainerRTL,
            ]}>
            <Text style={styles.openTime}>
              {language === 'english' ? 'Sun-Thu,' : 'الأحد-الخميس'}{' '}
              {item?.workhours?.saturday}
            </Text>
            <Text style={styles.openTime}>
              & {language === 'english' ? 'Sat' : 'السبت'}{' '}
              {item?.workhours?.saturday}
            </Text>
          </View>
          <Text style={[styles.closeTime, styles.openTimeContainerRTL]}>
            {language === 'english' ? 'Friday' : 'يوم الجمعة'}{' '}
            {item?.workhours?.friday}
          </Text>
          {/* Icons */}
          <View
            style={[styles.iconContainer, isArabic && styles.iconContainerRTL]}>
            <View style={styles.iconStyle}>
              <Svg width={30} height={30} xmlns="http://www.w3.org/2000/svg">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="30"
                  height="30"
                  x="0"
                  y="0"
                  viewBox={item.email.iconViewBox}
                  xmlSpace="preserve">
                  <G>
                    <Path d={item.email.iconPath} fill={'white'}></Path>
                  </G>
                </Svg>
              </Svg>
            </View>
            <View style={styles.iconStyle}>
              <Svg width={30} height={30} xmlns="http://www.w3.org/2000/svg">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="30"
                  height="30"
                  x="0"
                  y="0"
                  viewBox={item.address.iconViewBox}
                  xmlSpace="preserve">
                  <G>
                    <Path d={item.address.iconPath} fill={'white'}></Path>
                  </G>
                </Svg>
              </Svg>
            </View>
            <View style={styles.iconStyle}>
              <Svg width={30} height={30} xmlns="http://www.w3.org/2000/svg">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="30"
                  height="30"
                  x="0"
                  y="0"
                  viewBox={item.telephone.iconViewBox}
                  xmlSpace="preserve">
                  <G>
                    <Path d={item.telephone.iconPath} fill={'white'}></Path>
                  </G>
                </Svg>
              </Svg>
            </View>
          </View>
          <FlatList
            data={item.dietitians}
            renderItem={renderDietitianCard}
            keyExtractor={item => item.name}
            contentContainerStyle={styles.flatListContainer}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  containerRTL: {
    alignItems: 'flex-end',
  },
  image: {
    width: width * 0.9,
    height: width * 0.6,
    borderRadius: 20,
    marginBottom: 10,
  },
  contentContainer: {
    width: width * 0.9,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Careem',
    fontWeight: '700',
    color: 'rgba(21, 75, 38, 1)',
    marginBottom: 10,
  },
  titleRTL: {
    textAlign: 'right',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Careem',
    lineHeight: 26,
    marginBottom: 10,
    color: 'rgba(130, 142, 157, 1)',
  },
  openTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
    gap: 5,
  },
  openTimeContainerRTL: {
    flexDirection: 'row-reverse',
  },
  openTime: {
    fontSize: 14,
    color: 'rgba(22, 75, 39, 1)',
    fontWeight: '400',
    lineHeight: 21,
    fontFamily: 'Careem',
  },
  closeTime: {
    fontFamily: 'Careem',
    fontSize: 14,
    color: 'rgba(223, 85, 85, 1)',
    fontWeight: '400',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  iconContainerRTL: {
    flexDirection: 'row-reverse',
  },
  iconStyle: {
    padding: 7,
    backgroundColor: 'rgba(147, 193, 69, 1)',
    borderRadius: 7,
    marginHorizontal: 5,
  },
  cardContainer: {
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dietitianName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dietitianTitle: {
    fontSize: 16,
    color: 'rgba(130, 142, 157, 1)',
    fontFamily: 'Careem',
    fontWeight: '400',
  },
  dietitianEducation: {
    fontSize: 14,
    color: 'rgba(130, 142, 157, 1)',
    fontFamily: 'Careem',
    fontWeight: '400',
    marginTop: 5,
  },
  experienceCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  experienceLogo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  dietitianExperience: {
    color: 'rgba(3, 11, 6, 1)',
    fontSize: 14,
    fontFamily: 'Careem',
    fontWeight: '400',
  },
  flatListContainer: {
    flexGrow: 1,
  },
  arabicStyle: {
    textAlign: 'right', // Align text to the right for Arabic
    alignSelf: 'flex-end',
  },
  englishStyle: {
    textAlign: 'left', // Align text to the left for English
    alignSelf: 'flex-start',
  },
});

export default ClinicDetailsScreen;
