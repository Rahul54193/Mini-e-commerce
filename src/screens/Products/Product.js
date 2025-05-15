import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RoutName } from '../../helper/strings'
import NavigationService from '../../navigation/NavigationService'
import axios from 'axios'
import { API } from '../../helper/config'
import ProductCard from '../../components/ProductCard'
import ProductListHeader from '../../components/ProductListHeader'

const Product = props => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        getProducts()
    }, [])
// get all products
    const getProducts = async () => {
        try {
            setLoader(true)
            const products = await axios.get(API.BASR_URL + 'products')
            setProducts(products.data)
            setLoader(false)
        } catch (error) {
            setLoader(false)
            console.log('Error while fetching products')
        }
    }
    if (loader) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} color={'#4563e8'} />
            </View>
        )
    }
    const ListEmptyComponent = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No products found</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <ProductListHeader
                title={'Products'}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ListEmptyComponent}
                data={products}
                renderItem={({ item }) => <Pressable onPress={() => NavigationService.navigate(RoutName.PRODUCT_DETAILS, { product: item })
                }>
                    <ProductCard product={item} />
                </Pressable>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Product