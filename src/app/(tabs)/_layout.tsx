import { Tabs } from "expo-router"
import { MaterialCommunityIcons, MaterialIcons, SimpleLineIcons  } from "@expo/vector-icons"
import { useQueryClient } from "@tanstack/react-query"


export default function Layout() {
  const queryClient = useQueryClient()
  return (
      <Tabs>
        <Tabs.Screen 
          name="feed" 
          options={{ 
            title: 'Feed',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="newspaper-variant-multiple-outline" color={color} /> 
          }} 
          listeners={() => ({
            tabPress: () => (queryClient.invalidateQueries({ queryKey: ["feed"] })),
          })}
          />
        <Tabs.Screen 
          name="index" 
          options={{ 
            title: 'Home',
            tabBarIcon: ({ color }) => <SimpleLineIcons size={22} name="home" color={color} /> 
          }} />
        <Tabs.Screen 
          name="my_recipes" 
          options={{ 
            title: 'Recipes',
            tabBarIcon: ({ color }) => <SimpleLineIcons size={20} name="book-open" color={color} /> 
        }} />
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: 'Profile',
            tabBarIcon: ({ color }) => <MaterialIcons name="person-outline" size={26} color={color} />
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
