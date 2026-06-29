// import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { COLORS } from '../../../constants'
export default function TabLayout() {
        return (
                <Tabs screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: COLORS.primary,
                        tabBarInactiveTintColor: "#CDCDE0",
                        tabBarShowLabel: false,
                        
                        tabBarStyle:{
                                backgroundColor:'#fff',
                                borderTopWidth:1,
                                height:56,
                                paddingTop:8
                        }
                }}>
                        <Tabs.Screen name='index' />
                </Tabs>
        )
}