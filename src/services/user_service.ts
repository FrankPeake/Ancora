export async function getUserById(id: string) {
    console.log("Fetching user with ID:", id);
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/users/${id}`,
  )
  if (!response.ok) {
    throw new Error("Failed to fetch user")
  }
  return response.json()
}

export async function deleteUser(id: string) {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/users/${id}`,
    {
      method: "DELETE",
    },
  )
  if (!response.ok) {
    throw new Error("Failed to delete user")
  }
  return
}