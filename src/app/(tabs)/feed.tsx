import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getFeed } from "@/services/follow_service"
import FeedListItem from "@/components/feed_list_item"
import {
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { storage } from "@/utils/storage"

const userString = storage.getString("user")
const userObject = userString ? JSON.parse(userString) : null

export default function Feed() {

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["feed"],
    queryFn: () => getFeed(storage.getString("user") ? userObject.id : ""),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    staleTime: 5 * 60 * 1000,
  })

  if (isLoading) {
    return <ActivityIndicator size={"large"} style={{ marginTop: "20%" }} />
  }
  if (error) {
    return (
      <Text
        style={{
          marginTop: "20%",
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        Error: {error.message}
      </Text> 
    )
  } else {
    console.log("Feed data: ", data)
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", marginHorizontal: 0 }}
    >
        <FlatList
        data={data}
        keyExtractor={(item) => item.recipe_id}
        renderItem={({ item }) => <FeedListItem feedItem={item} />}
        showsVerticalScrollIndicator={false}
      />
      
    </SafeAreaView>
  )
}
