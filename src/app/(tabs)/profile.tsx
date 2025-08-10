import { useQuery } from "@tanstack/react-query"
import { getRecipes } from "@/services/recipe_service"
import {
  Text,
  ActivityIndicator,

} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { storage } from "@/utils/storage"

const userString = storage.getString("user")
const userObject = userString ? JSON.parse(userString) : null

export default function MyRecipes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(storage.getString("user") ? JSON.parse(userObject).id : ""),
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
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", marginHorizontal: 20 }}
    >
        <Text>Profile</Text>
    </SafeAreaView>
  )
}
