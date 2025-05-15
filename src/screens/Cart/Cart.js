import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductListHeader from '../../components/ProductListHeader'
import { styles } from '../Cart/Styles';
import CartItem from '../../components/CartItem';
import NavigationService from '../../navigation/NavigationService';
import { clearCart } from '../../store/slice/cart.slice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const dispatch = useDispatch();
  console.log(items, 'cartItemsCount')
  return (
    <View style={{ flex: 1 }}>
      <ProductListHeader
        backButtonVisible
        title={'Cart'}
        navigation={NavigationService}
      />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Cart ({items.length})</Text>
        </View>

        {/* Items List */}
        <ScrollView style={styles.itemsContainer}>
          {items.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Your cart is empty</Text>
            </View>
          ) : (
            items.map(item => <CartItem key={item.id} item={item} />)
          )}
        </ScrollView>

        {/* Footer */}
        {items.length > 0 && (
          <View style={styles.footer}>
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.checkoutButton}
              onPress={() => Alert.alert('Checkout', 'Thank you for your purchase!')}
            >
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={() => dispatch(clearCart())}
            >
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  )
}

export default Cart
