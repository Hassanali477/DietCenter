import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

const maleImage = require('../Assets/Images/Male-Image.png');

const {width, height} = Dimensions.get('screen');

class HeightSelectionScreen extends Component {
  state = {
    selectedHeight: 120, // Default height in cm
    scrollOffsetY: 0, // Store the current scroll position
    highlightedIndex: 66,
    highlightedValue: 167,
  };

  render() {
    const {highlightedIndex} = this.state;
    const numbers = Array.from({length: 300}, (_, index) => index + 100);

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Select Your Height?</Text>
        <View style={styles.content}>
          <Image source={maleImage} style={styles.image} resizeMode="contain" />

          <View style={[styles.scrollCont]}>
            <View style={styles.lines1} />
            <View style={styles.lines2} />
            <FlatList
              style={{width: '100%'}}
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

export default HeightSelectionScreen;

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
    alignSelf: 'flex-start',
    fontFamily: 'Careem Bold',
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
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
    // paddingTop: height / 1.6 / 2 - 25,
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
