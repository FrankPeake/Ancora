import {
  Text,
  Pressable,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, router } from "expo-router"

import { useEffect } from "react"
import { storage } from "@/utils/storage"

export default function HomeScreen() {

  useEffect(() => {
    const user = storage.getString('user'); // MMKV's getString returns undefined if key doesn't exist
    if (!user) {
      console.log("User not found in storage, redirecting to sign_in.");
      router.replace('/my_recipes');
    } else {
      console.log("User found in storage:", user);
    }
  }, []);
  
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#FF8C00",
        }}
      >
        Home
      </Text>
      <Link href="/my_recipes" asChild>
        <Pressable style={{ alignItems: "center", gap: 5, marginTop: 10 }}>
          <Text style={{ color: "#FF8C00", fontSize: 16, fontWeight: "600" }}>
            View My Recipes
          </Text>
        </Pressable>
      </Link>
      <Link href="/my_recipes" asChild>
        <Pressable style={{ alignItems: "center", gap: 5, marginTop: 10 }}>
          <Text style={{ color: "#FF8C00", fontSize: 16, fontWeight: "600" }}>
            Sign In
          </Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  )
}
