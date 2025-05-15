import React from 'react';
import { View, Text, Image, ScrollView, Button, Alert, Pressable } from 'react-native';
import { styles } from './Styles';
import ProductListHeader from '../../components/ProductListHeader';
import NavigationService from '../../navigation/NavigationService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/cart.slice';
import { moderateScaleVertical } from '../../helper/responsiveSize';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Alert.alert('Success', 'Product added to cart successfully!');
  };

  return (
    <View style={{ flex: 1 }}>
      <ProductListHeader
        title={'Product Details'}
        backButtonVisible
        navigation={NavigationService}
      />
      <ScrollView style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.rating}>⭐ {product.rating.rate} ({product.rating.count} ratings)</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Pressable style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
        <View style={{ height: moderateScaleVertical(20) }} />
      </ScrollView>
    </View>

  );
};

export default ProductDetail;

