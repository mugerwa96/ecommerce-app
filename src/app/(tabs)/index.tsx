import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
// interface Product
export default function Home() {
  const [products, setProducts] = useState<any>(null)
  const [loading, setLoading] = useState<Boolean>(true)
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products)
      setLoading(false)
    } catch (error) {
      console.log('Error fetching products')
    }

  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <View>
      {loading ?
        <View className='flex justify-center items-center min-h-screen'>
          <ActivityIndicator />
          <Text>Loading .....</Text>
        </View> :
        <View>
          <Text className='font-bold text-2xl p-5'>Available products</Text>
          <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item }) =>
              <Link href={`/${item.id}`} asChild>
                <TouchableOpacity className="w-[48%] h-60 p-8 mb-4 bg-white rounded-lg overflow-hidden">
                  <View >
                    <Image source={item.images[0]} resizeMode="contain" className="w-[70%] h-[70%]" />
                    <View className="p-5">
                      <Text className="font-bold text-md">{item.title}</Text>
                      <Text>$:{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </Link>
            }
            keyExtractor={item => item.id}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-between',
            }}
          />
        </View>
      }

    </View>
  )


}