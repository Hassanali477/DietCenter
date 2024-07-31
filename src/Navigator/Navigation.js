import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrdersFlatlist from '../Components/OrdersFlatlist';
import OrderDetails from '../Components/OrderDetails';
import FlatlistProfile from '../Components/FlatlistProfile';
import HeaderPolicy from '../Components/HeaderPolicy';
import HeightSelectionScreen from '../Components/HeightCheckScreen';
import VoucherFlatlist from '../Components/VoucherFlatlist';
import ClinicFlatlist from '../Components/ClinicFlatlist';
import ClinicDetails from '../Components/ClinicDetails';
import CustomTextInput from '../Components/CustomTextInput';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OrdersFlatlist">
        {/* <Stack.Screen
          name="HeaderPolicy"
          component={HeaderPolicy}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="FlatlistProfile"
          component={FlatlistProfile}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="HeightChecking"
          component={HeightSelectionScreen}
          options={{
            headerShown: false,
          }}
        /> */}
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
        {/* <Stack.Screen name='Voucher' component={VoucherFlatlist} options={{
          headerShown:false
        }} /> */}
        {/* <Stack.Screen
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
        /> */}
        {/* <Stack.Screen
          name="CustomTextInput"
          component={CustomTextInput}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
