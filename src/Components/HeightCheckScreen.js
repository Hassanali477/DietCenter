import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

// Example image
const maleImage = require('../Assets/Images/Male-Image.png');

const {width, height} = Dimensions.get('screen');

export default class HeightSelectionScreen extends Component {
  constructor(props) {
    super(props);
    const language = this.props.userData?.language || 'english';
    this.state = {
      selectedHeight: 120, // Default height in cm
      scrollOffsetY: 0, // Store the current scroll position
      highlightedIndex: 66,
      highlightedValue: 167,
      language,
    };
  }

  render() {
    const {highlightedIndex, language} = this.state;
    const numbers = Array.from({length: 300}, (_, index) => index + 100);

    // Translation for the heading based on the language
    const headingText =
      language === 'english' ? 'Select Your Height?' : 'اختر طولك؟';

    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.heading,
            language === 'arabic'
              ? styles.headingArabic
              : styles.headingEnglish,
          ]}>
          {headingText}
        </Text>
        <View
          style={[
            styles.content,
            language === 'arabic' && styles.contentArabic,
          ]}>
          <Image source={maleImage} style={styles.image} resizeMode="contain" />

          <View style={styles.scrollCont}>
            <View style={styles.lines1} />
            <View style={styles.lines2} />
            <FlatList
              style={{width: '100%'}}
              s
              data={numbers}
              renderItem={({item, index}) => {
                const isSelected = highlightedIndex === index;
                return (
                  <View
                    style={[
                      styles.numberContainer,
                      isSelected && styles.selectedNumberContainer,
                    ]}>
                    <Text
                      style={[
                        styles.textScroll,
                        isSelected && styles.selectedTextScroll,
                      ]}>
                      {item}
                      {isSelected && <Text style={styles.cmText}> cm</Text>}
                    </Text>
                  </View>
                );
              }}
              keyExtractor={item => item.toString()}
              getItemLayout={(data, index) => ({
                length: 85, // Adjust the height accordingly
                offset: 85 * index,
                index,
              })}
              initialScrollIndex={64.3}
              onScroll={({nativeEvent}) => {
                const offsetY = nativeEvent.contentOffset.y;
                const index = Math.floor(offsetY / 85); // Adjust the height accordingly
                if (index >= 0 && index < numbers.length) {
                  this.setState({
                    highlightedIndex: index + 3,
                    highlightedValue: numbers[index] + 3,
                  });
                }
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontFamily: 'Careem Bold',
    textAlign: 'left', // Default to left alignment
  },
  headingArabic: {
    textAlign: 'right', // Align text to the right for Arabic
    alignSelf: 'flex-end',
  },
  headingEnglish: {
    textAlign: 'left', // Align text to the left for English
    alignSelf: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  contentArabic: {
    flexDirection: 'row-reverse', // Reverse the row direction for Arabic
  },
  image: {
    height: 500,
  },
  scrollCont: {
    width: 150,
    height: height / 1.5,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  numberContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  selectedNumberContainer: {
    height: 55,
  },
  textScroll: {
    fontSize: 43,
    lineHeight: 43,
    fontWeight: '600',
    color: 'black',
    opacity: 0.1, // Blur effect for unselected items
  },
  selectedTextScroll: {
    fontSize: 58,
    lineHeight: 58,
    fontWeight: '700',
    color: '#154B26',
    opacity: 1, // Full opacity for selected item
  },
  cmText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#154B26',
  },
  lines1: {
    width: '100%',
    height: 3,
    backgroundColor: '#154B26',
    position: 'absolute',
    top: height / 1.68 / 2 - 25, // Adjust for proper centering
    zIndex: 200,
  },
  lines2: {
    width: '100%',
    height: 3,
    backgroundColor: '#154B26',
    position: 'absolute',
    top: height / 1.5 / 2 + 23, // Adjust for proper centering
    zIndex: 200,
  },
});
