import React from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersFlatlist from '../Components/OrdersFlatlist';
import OrderDetails from '../Components/OrderDetails';
import FlatlistProfile from '../Components/FlatlistProfile';
import HeightSelectionScreen from '../Components/HeightCheckScreen';
import VoucherFlatlist from '../Components/VoucherFlatlist';
import ClinicFlatlist from '../Components/ClinicFlatlist';
import ClinicDetails from '../Components/ClinicDetails';
import CustomTextInput from '../Components/CustomTextInput';
import HomeScreenCard from '../Components/HomeScreenCard';
import NotificationsScreen from '../Components/NotificationsScreen';
import TermsCondition from '../screens/TermsCondition';
import PrivacyPolicy from '../screens/PrivacyPolicy';
const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TermsCondition">
        <Stack.Screen
          name="TermsCondition"
          component={TermsCondition}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlatlistProfile"
          component={FlatlistProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HeightChecking"
          component={HeightSelectionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrdersFlatlist"
          component={OrdersFlatlist}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Voucher"
          component={VoucherFlatlist}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ClinicFlatlist"
          component={ClinicFlatlist}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ClinicDetails"
          component={ClinicDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomTextInput"
          component={CustomTextInput}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreenCard"
          component={HomeScreenCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
