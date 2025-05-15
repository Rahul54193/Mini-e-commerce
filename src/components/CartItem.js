import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../store/slice/cart.slice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
console.log(item, 'item')
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => dispatch(decreaseQuantity(item.id))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          
          <Text style={styles.quantity}>{item.quantity}</Text>
          
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => dispatch(increaseQuantity(item.id))}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Subtotal & Remove */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotal}>
          ${(item.price * item.quantity).toFixed(2)}
        </Text>
        <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#f5f5f5',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 16,
  },
  quantity: {
    width: 24,
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 8,
  },
  subtotalContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 16,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  removeText: {
    color: 'red',
    fontSize: 14,
  },
});

export default CartItem;