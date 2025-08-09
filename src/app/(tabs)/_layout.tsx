import { Stack, Tabs, router } from "expo-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AntDesign, MaterialCommunityIcons, MaterialIcons, FontAwesome6 } from "@expo/vector-icons"


export default function Layout() {
  return (
      <Tabs>
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: 'Home',
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} /> 
          }} />
        <Tabs.Screen 
          name="my_recipes" 
          options={{ 
            title: 'Recipes',
            tabBarIcon: ({ color }) => <FontAwesome6 size={22} name="book" color={color} /> 
        }} />
        <Tabs.Screen
          name="sign_in"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="create_update_recipe"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="view_recipe"
          options={{
            href: null,
          }}
        />
      </Tabs>
  )
}
