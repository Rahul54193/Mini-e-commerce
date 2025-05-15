import React, { useEffect } from 'react';
import { RoutName } from '../helper/strings';
import Product from '../screens/Products/Product';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Cart from '../screens/Cart/Cart';
import {isMountedRef, navigationRef} from './NavigationService';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    // check naviagtion mounted or not
    useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
      }, []);
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={RoutName.PRODUCT_LIST}
                    component={Product}
                />
                <Stack.Screen
                    name={RoutName.PRODUCT_DETAILS}
                    component={ProductDetail}
                />
                <Stack.Screen
                    name={RoutName.CART}
                    component={Cart}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigator