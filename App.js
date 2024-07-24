import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermsCondition from './src/screens/TermsCondition';
import FlatlistProfile from './src/Components/FlatlistProfile';
import HeightCheckScreen from './src/Components/HeightCheckScreen';
import OrdersFlatlist from './src/Components/OrdersFlatlist';
import Navigation from './src/Navigator/Navigation';
const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
