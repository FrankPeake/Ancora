export async function getFeed(id: string) {
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/follow/feed/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch recipes")
  }
  console.log("response: ", response)
  const response_json = await response.json()
  const data = response_json.map((item: any) => {
    console.log("item: ", item)
    item.created_at = new Date(item.created_at).toLocaleString();
    return item
  })
  return data
}