import axios from 'axios';
import React from 'react'

import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
const Details = () => {
        const [product, setProduct] = useState<any>(null)
        const [loading, setLoading] = useState<Boolean>(true)
        const { id } = useLocalSearchParams();
        const fetchProducts = async () => {
                try {
                        const response = await axios.get(`https://dummyjson.com/products/${id}`);
                        setProduct(response.data)
                        setLoading(false)
                        console.log(response.data)

                } catch (error) {
                        console.log('Error fetching products')
                }

        }
        useEffect(() => {
                fetchProducts()
        }, [])
        return (
                <View className="p-5">
                        {loading ?
                                <View className='flex justify-center items-center min-h-screen'>
                                        <ActivityIndicator />
                                        <Text>Loading .....</Text>
                                </View> :
                                <View className='flex  h-56 w-[100%] justify-center items-center m bg-white'>
                                        <Image source={product.images[0]} resizeMode="cover" className="w-[60%] h-[60%]" />
                                        <Text className="font-bold text-md">{product.title}</Text>
                                        <Text>$:{product.price}</Text>
                                </View>
                        }
                </View>
        )
}

export default Details