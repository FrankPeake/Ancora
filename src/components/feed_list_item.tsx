import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Feed } from "@/types/feed_types"
import { Link } from "expo-router"

type FeedItemProps = {
    feedItem: Feed
}

export default function FeedListItem({ feedItem }: FeedItemProps) {
    console.log("feedItem: ", feedItem)
  return (
    <Link href={`view_recipe/?id=${feedItem.recipe_id}`} asChild>
      <TouchableOpacity
        style={styles.feedComponent}
      >
        <View style={{ gap: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {feedItem.author_username} created a new Recipe - {feedItem.created_at}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "normal" }}>
            {feedItem.title}
          </Text>
          <Text style={{ fontSize: 10, color: "gray" }}>
            {feedItem.prep_time} min | {feedItem.servings} servings
          </Text>
          <Text style={{ color: "gray" }}>{feedItem.description}</Text>
        </View>
        <Link href={`create_update_recipe/?id=${feedItem.recipe_id}`} asChild>
          <AntDesign
            name="infocirlceo"
            size={17}
            color="#FF8C00"
            style={{
              alignSelf: "flex-start",
              marginLeft: "auto",
              marginRight: 5,
            }}
          />
        </Link>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  feedComponent: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    paddingBottom: 10,
  }
})