import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { moderateScale, moderateScaleVertical } from '../helper/responsiveSize';
import { useSelector } from 'react-redux';
import NavigationService from '../navigation/NavigationService';
import { RoutName } from '../helper/strings';

const ProductListHeader = ({ title, navigation, backButtonVisible = false }) => {
    const cartItemsCount = useSelector(state => state.cart);
    console.log('kkkk', cartItemsCount)
    return (
        <View style={styles.headerContainer}>
            {backButtonVisible &&
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        name={'arrow-back-circle'}
                        size={moderateScaleVertical(30)}
                        color="#fff"
                    />
                </TouchableOpacity>
            }
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <TouchableOpacity
                style={styles.cartButton}
                onPress={() => title === 'Cart' ? NavigationService.navigateAndReset(RoutName.PRODUCT_LIST) : NavigationService.navigate(RoutName.CART)}
            >
                <Icon
                    name={title === 'Cart' ? 'home' : 'cart-outline'}
                    size={24}
                    color="#fff"
                />
                {cartItemsCount?.items?.length > 0 && title != 'Cart' && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{cartItemsCount?.items?.length}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: moderateScaleVertical(70),
        backgroundColor: '#4563e8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: moderateScaleVertical(10),
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        right: -5,
        top: -5,
        backgroundColor: '#ff3b30',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ProductListHeader;