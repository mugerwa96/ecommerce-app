// import { Ionicons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
export default function TabLayout() {
        return (
                <Tabs screenOptions={{
                        headerShown: false,
                        
                        tabBarActiveTintColor: '#111111',
                        tabBarInactiveTintColor: "#CDCDE0",
                }}>
                        <Tabs.Screen name='index'
                                options={{
                                        tabBarIcon: ({ color, focused }) =>
                                                <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={20} />
                                }}
                        />
                        <Tabs.Screen name='cart'
                                options={{
                                        tabBarIcon: ({ color, focused }) =>
                                                <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={20} />
                                }}
                        />

                </Tabs>
        )
}