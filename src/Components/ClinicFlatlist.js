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
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYzBkY2QwYmVjYzZhYjNiOGUxZTRjOThkZDRmMzIwZDU3M2RkNThmNDdmYTkxNTkwYjU3ZmY1MzgyYTEyY2FiNzYzNzZmZTg3ZDQ1ODQ3MTMiLCJpYXQiOjE3MjI1ODMzNjAuNTY5NzEyLCJuYmYiOjE3MjI1ODMzNjAuNTY5NzE0LCJleHAiOjE3MjI2Njk3NjAuNTYzMjc0LCJzdWIiOiIyOCIsInNjb3BlcyI6W119.MSoV5f4I_3xxsHME-74vM65peZC3pIg8XryB3c0vWX7pxtScTjXOg2RtmfCIOBMzcFQS5c_5gWis7OaFFgfEm-bJWodzqMAEiE_l2F6jgvthxD5vdAu8AWvr3qus_Xy4BpSTUQcrwMzjS0c9bimBMhrDydOifwy3d5H3BmUhl9L59uHH9pz2GxNF-B-0LBK6CORFiWTVgua3dCKqotHBhULR1E07aulqwNYd2IfspgItk9ZNbe41oxfgVNgbtwMvhHdy5iu7HPfd5Y-h3nwHDjuQXK_laPli0313FWiqHaFTrzTMW-w-QqvOWP1s_nA-h-f_wtEd1Vj8_PSy_GxxOQx1x0p8zktZB1S1NSx_7e6E_Tj4RjrXxUuMyFhJF-hDiue_2xdpN68eYvJArXpj3aTWS6Ru0WqnfU7_EDB4TzA936RbffbhixjliCgtsBTSUc4mFKvw8VKhRZIxXjecA5dsQwxDboVqaWWcvSHszBDgHrl32_JmlwJI5WGVIShxPeGrZoMovjqlzwXNpSRoD_KWmfaJAwYzGFYk8MT9ZX7QH-S-7fzUBJUmHF9gt-U6VUwjsF5oNrDeUFDFhS7gZ5Tov22eMV66eM2nheutuHTqCDZamF9UBBJhczvmDCIgNFnsN-QyczetVQcADi_Ox_DPlkgyHU7a4Nnr4f4eH0M',
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

export default ClinicFlatlist;
