import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Recipe } from "@/types/recipe_types"
import { Link } from "expo-router"

type RecipeListItemProps = {
  recipeItem: Recipe
}

export default function RecipeListItem({ recipeItem }: RecipeListItemProps) {
  return (
    <Link href={`view_recipe/?id=${recipeItem.id}`} asChild>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "#f9f9f9",
          borderRadius: 10,
          marginBottom: 10,
          borderColor: "gray",
          borderWidth: StyleSheet.hairlineWidth,
          borderBottomColor: "grey",
          paddingBottom: 10,
        }}
      >
        <View style={{ gap: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {recipeItem.title}
          </Text>
          <Text style={{ fontSize: 10, color: "gray" }}>
            {recipeItem.prep_time} min | {recipeItem.servings} servings
          </Text>
          <Text style={{ color: "gray" }}>{recipeItem.description}</Text>
        </View>
        <Link href={`create_update_recipe/?id=${recipeItem.id}`} asChild>
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
