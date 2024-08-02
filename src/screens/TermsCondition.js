import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Get screen dimensions
const {width, height} = Dimensions.get('screen');

export default class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    const language = this.props.userData?.language || 'english';
    this.state = {language};
  }

  handleNext = () => {
    const {navigation} = this.props;
    navigation.navigate('FlatlistProfile'); // Replace 'NextScreen' with the actual name of the screen
  };
  toggleLanguage = () => {
    this.setState(prevState => ({
      language: prevState.language === 'english' ? 'arabic' : 'english',
    }));
  };

  renderBackArrow() {
    const {language} = this.state;
    return (
      <View
        style={[
          styles.backArrowContainer,
          {alignItems: language === 'arabic' ? 'flex-end' : 'flex-start'},
        ]}>
        <TouchableOpacity>
          <Image
            source={require('../Assets/Icons/roundBack.png')}
            style={[
              styles.backArrow,
              {transform: [{scaleX: language === 'arabic' ? -1 : 1}]},
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderHeader() {
    const {language} = this.state;
    return (
      <View style={styles.headerContainer}>
        <View
          style={[
            styles.logoAndHeadingContainer,
            {flexDirection: language === 'arabic' ? 'row-reverse' : 'row'},
          ]}>
          <Image
            source={require('../Assets/Images/TC-Screen-Terms-Condition-Image.png')}
            style={styles.logo}
          />
          <View
            style={[
              styles.headingContainer,
              {
                alignItems: language === 'arabic' ? 'flex-end' : 'flex-start',
                marginLeft: language === 'arabic' ? 0 : 20,
                marginRight: language === 'arabic' ? 20 : 0,
              },
            ]}>
            <Text style={styles.heading}>
              {language === 'arabic' ? 'سياات الخصوصية' : 'Privacy Policy'}
            </Text>
            <Text style={styles.headingParagraph}>
              {language === 'arabic'
                ? 'التاريخ الأخير: 23 مارس 2024'
                : 'Last Updated: March 23 2024'}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  renderContent() {
    const {language} = this.state;
    return (
      <View style={styles.paragraphContainer}>
        <Text
          style={[
            styles.textHeading,
            {textAlign: language === 'arabic' ? 'right' : 'left'},
          ]}>
          {language === 'arabic'
            ? 'ما هو لوريم إيبسوم؟'
            : 'What is Lorem Ipsum?'}
        </Text>
        <ScrollView
          contentContainerStyle={{paddingBottom: '100%'}}
          showsVerticalScrollIndicator={false}>
          <Text
            style={[
              styles.text,
              {textAlign: language === 'arabic' ? 'right' : 'left'},
            ]}>
            {language === 'arabic'
              ? 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إليت. نولا فيسيليسي. كورا بورتا سوليسيتيودين، إيست فيل تينسيدنت كونغي، ليغولا إيرات إنتردوم إيرات، نيك فولوبات نيسي ريسوس إيغيت نونك. سيد مالاتيس، إيلت آك تيمبور فيناتيس، ريسوس فيليس فاوكيبوس إست، آت سوسيبينت إيروس سابين إيغيت أركو. إنتيجر إيت أنتي نيك ليبرو تينسيدنت فيرمنتيوم نون سيد نونك. دونيك فولتوبات، أركو نون كونفالس أكتور، ريسوس ريسوس وولبوت ليبرو، سيت أميت فارياس لوريم بوروس آت أوديو. نولام كويز ليبرو نيك دولور أولامكوربر ساجيتيس.لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إليت. نولا فيسيليسي. كورا بورتا سوليسيتيودين، إيست فيل تينسيدنت كونغي، ليغولا إيرات إنتردوم إيرات، نيك فولوبات نيسي ريسوس إيغيت نونك. سيد مالاتيس، إيلت آك تيمبور فيناتيس، ريسوس فيليس فاوكيبوس إست، آت سوسيبينت إيروس سابين إيغيت أركو. إنتيجر إيت أنتي نيك ليبرو تينسيدنت فيرمنتيوم نون سيد نونك. دونيك فولتوبات، أركو نون كونفالس أكتور، ريسوس ريسوس وولبوت ليبرو، سيت أميت فارياس لوريم بوروس آت أوديو. نولام كويز'
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur sollicitudin, est vel tincidunt congue, ligula erat interdum erat, nec volutpat nisi risus eget nunc. Sed malesuada, elit ac tempor venenatis, risus felis faucibus est, at suscipit eros sapien eget arcu. Integer et ante nec libero tincidunt fermentum non sed nunc. Donec vulputate, arcu non convallis auctor, risus risus volutpat libero, sit amet varius lorem purus at odio. Nullam quis libero nec dolor ullamcorper sagittis. Nam ultricies purus ut lectus viverra, ac malesuada eros euismod. Vivamus non nisl ut augue condimentum gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur sollicitudin, est vel tincidunt congue, ligula erat interdum erat, nec volutpat nisi risus eget nunc. Sed malesuada, elit ac tempor venenatis, risus felis faucibus est, at suscipit eros sapien eget arcu. Integer et ante nec libero tincidunt fermentum non sed nunc. Donec vulputate, arcu non convallis auctor, risus risus volutpat libero, sit amet varius lorem purus at odio. Nullam quis libero nec dolor ullamcorper sagittis. Nam ultricies purus ut lectus viverra, ac malesuada eros euismod. Vivamus non nisl ut augue condimentum gravida.'}
          </Text>
          <Text
            style={[
              styles.text1,
              {textAlign: language === 'arabic' ? 'right' : 'left'},
            ]}>
            {language === 'arabic'
              ? 'لوريم إيبسوم دولور سيت أميت، كونسيكتيتور أديبيسيسينغ إليت. نولا فيسيليسي. كورا بورتا سوليسيتيودين، إيست فيل تينسيدنت كونغي، ليغولا إيرات إنتردوم إيرات، نيك فولوبات نيسي ريسوس إيغيت نونك. سيد مالاتيس، إيلت آك تيمبور فيناتيس، ريسوس فيليس فاوكيبوس إست، آت سوسيبينت إيروس سابين إيغيت أركو. إنتيجر إيت أنتي نيك ليبرو تينسيدنت فيرمنتيوم نون سيد نونك. دونيك فولتوبات، أركو نون كونفالس أكتور، ريسوس ريسوس وولبوت ليبرو، سيت أميت فارياس لوريم بوروس آت أوديو. نولام كويز ليبرو نيك دولور أولامكوربر ساجيتيس.'
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur sollicitudin, est vel tincidunt congue, ligula erat interdum erat, nec volutpat nisi risus eget nunc. Sed malesuada, elit ac tempor venenatis, risus felis faucibus est, at suscipit eros sapien eget arcu. Integer et ante nec libero tincidunt fermentum non sed nunc. Donec vulputate, arcu non convallis auctor, risus risus volutpat libero, sit amet varius lorem purus at odio. Nullam quis libero nec dolor ullamcorper sagittis. Nam ultricies purus ut lectus viverra, ac malesuada eros euismod. Vivamus non nisl ut augue condimentum gravida.'}
          </Text>
        </ScrollView>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBackArrow()}
        {this.renderHeader()}
        {this.renderContent()}
        <TouchableOpacity
          style={styles.switchButton}
          onPress={this.toggleLanguage}>
          <Text style={styles.buttonText}>
            {this.state.language === 'english'
              ? 'Switch to Arabic'
              : 'Switch to English'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={this.handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F5F5F5',
  },
  backArrowContainer: {
    width: '100%',
    padding: 10,
  },
  backArrow: {
    width: 45,
    height: 45,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerContainer: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  logoAndHeadingContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headingContainer: {
    marginLeft: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headingParagraph: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  paragraphContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  text1: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginTop: 20,
  },
  switchButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    padding: 10,
    backgroundColor: '#007BFF',
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
