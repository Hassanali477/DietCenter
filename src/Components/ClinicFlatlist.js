import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import Svg, {G, Path} from 'react-native-svg';

const {width} = Dimensions.get('screen');

const ClinicFlatlist = ({navigation}) => {
  const [language, setLanguage] = useState('english');
  const [clinicData, setClinicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClinicData();
  }, []);

  const fetchClinicData = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.ndcsystem.online/v1/options/clinics_data',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiZjliYzg3MGE5YWIyMGY1ODI2Y2Q3MTJhZDE4ODEzYTRhMzU5ZjYyYjFjZmQ2NGMyNGJlMGMzZmFjZGI3ZGFiOWY2MjVmMDA4N2Q2YzI1ODciLCJpYXQiOjE3MjIyMzE3MDkuODUzNjA2LCJuYmYiOjE3MjIyMzE3MDkuODUzNjA4LCJleHAiOjE3MjIzMTgxMDkuODQ2NTI2LCJzdWIiOiIyOCIsInNjb3BlcyI6W119.GCYXxmJY_7G_FyfNvIR4gRKMY-FYKDsGp5E7T3n8485c6UD-2ppNZEBsOKRkbk2V_u8fZtO73StibA_BtMYX67UTl0TT9REXnM3AURtxSqyyFvFsmlzm5_bKcrB-KpgCpI_B7fWcEXLwQeGYW6E_HiGYD3QDM0fNdwEpDGMzmMNVJ54qQxe6vHl2e3KKwVthz5v5mPUzNnXziCpdz0tlmpN6jTFSaH0jI7ORAjFLICoi0P5TB5vkr_eCMOBJNbQlBo01wFo9lIV3hbbfldy_jH3BZMx1-XqPCtBSRI0NX16WtbMjLFf-pM3QKOfJl7R9gToDvv8uZP2n1GiDyaw0CLk1QhiUqfg2IFrDX4pGLA9Rm-WD8rmY8MwqqWpeU43Jec7RMlhEedmDmgxX_2OUqDjxMQQj7hp_7BGhT-hOyQZ23gziM0H2C9QNLVQ4SLXF_0_7XD65o6DBjTkGAW9RoS7fqEF3PtjOoODLwFR_XKPYG6TZitgrXZAwGUlqu5qWumgMcrDZAYLFeQ8SYYTc_BPBlhYb0-D9OrKgj5Cwv1sQsigdi2I9mOj3wMhLZ4LoKmv3EXPsT64VE9PljnXVG9AfoNpRWMalbCzWqWvMYoanl7TIZtVqD-Xk4K4sIf65Z5ZqqMh_oAe67aR_w2IvSpn04eajXyfmwgAt1vIYLwI',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response?.data, 'response data');
      setClinicData(response?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Failed to load clinic data');
    } finally {
      setLoading(false);
    }
  };

  const handlePress = item => {
    navigation.navigate('ClinicDetails', {item, language});
  };

  const handleLanguageSwitch = () => {
    setLanguage(prevLanguage =>
      prevLanguage === 'english' ? 'arabic' : 'english',
    );
  };

  // Flatlist of all content
  const renderClinicItem = ({item, index}) => {
    const isArabic = language === 'arabic';
    return (
      <TouchableOpacity
        style={[
          styles.cardContainer,
          {flexDirection: isArabic ? 'row-reverse' : 'row'},
        ]}
        onPress={() => handlePress(item, index)}
        activeOpacity={0.7}>
        <Image
          source={{uri: item?.img}}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Name Closed or Open Timing */}
        <View
          style={[
            styles.infoContainer,
            {alignItems: isArabic ? 'flex-end' : 'flex-start'},
          ]}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.openTime}>{item?.address?.text}</Text>
          <Text style={styles.openTime}>
            {language === 'english' ? 'Saturday' : 'السبت'}{' '}
            {item?.workhours?.saturday}
          </Text>
          <Text style={styles.closeTime}>
            {language === 'english' ? 'Friday,' : 'يوم الجمعة'}{' '}
            {item?.workhours?.friday}
          </Text>
          {/* Icons */}
          <View style={styles.iconContainer}>
            <View style={styles.iconStyle}>
              <Svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  x="0"
                  y="0"
                  viewBox={item?.email?.iconViewBox}
                  xmlSpace="preserve">
                  <G>
                    <Path d={item?.email?.iconPath} fill={'white'}></Path>
                  </G>
                </Svg>
              </Svg>
            </View>
            <View style={styles.iconStyle}>
              <Svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  x="0"
                  y="0"
                  viewBox={item?.address?.iconViewBox}
                  xmlSpace="preserve">
                  <G>
                    <Path d={item?.address?.iconPath} fill={'white'}></Path>
                  </G>
                </Svg>
              </Svg>
            </View>
            <View style={styles.iconStyle}>
              <Svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  x="0"
                  y="0"
                  viewBox={item?.telephone?.iconViewBox}
                  xmlSpace="preserve">
                  <G>
                    <Path d={item?.telephone?.iconPath} fill={'white'}></Path>
                  </G>
                </Svg>
              </Svg>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        onPress={handleLanguageSwitch}
        style={{marginBottom: 20, padding: 10, backgroundColor: 'black'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Switch Language
        </Text>
      </TouchableOpacity>
      <FlatList
        data={
          language == 'english'
            ? clinicData.en?.clinics
            : clinicData.ar?.clinics
        }
        renderItem={renderClinicItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    width: width,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: width * 0.34,
    height: width * 0.34,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 5,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(3, 11, 6, 1)',
    fontFamily: 'Careem',
    marginBottom: 2,
  },
  openTime: {
    fontSize: 12,
    color: 'rgba(22, 75, 39, 1)',
    fontWeight: '400',
    marginTop: 3,
  },
  closeTime: {
    fontSize: 12,
    color: 'rgba(223, 85, 85, 1)',
    fontWeight: '400',
    marginTop: 5,
    letterSpacing: 0.02,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    gap: 5,
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: 'rgba(147, 193, 69, 1)',
    height: 35,
    width: 35,
  },
  icon: {
    width: 30,
    height: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default ClinicFlatlist;
