import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native"
import CustomButton from "@/components/custom_buttom"
import { useEffect, useState } from "react"
import { GoogleSignin, isSuccessResponse, isErrorWithCode, statusCodes} from "@react-native-google-signin/google-signin"

import { useQuery } from "@tanstack/react-query"
import { getUserById } from "@/services/user_service"
import { storage } from "@/utils/storage"

const userString = storage.getString("user")
const userObject = userString ? JSON.parse(userString) : null


export default function SignIn() {
  const [googleToken, setGoogleToken] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    GoogleSignin.configure({
        webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID, 
    })
  }, [])

  // -- authenticate google ID and fetch data from server --
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["users", googleToken],
    queryFn: () => getUserById(googleToken),
    enabled: isEnabled && !!googleToken,
  })
  const getStorageData = async () => {
    const userData = storage.getString("user")
    console.log("user data: ", userObject.id)
  }

  if (isLoading) {
      return <ActivityIndicator size={"large"} style={{ marginTop: "20%" }} />
  } else if (isSuccess) {
      storage.set("user", JSON.stringify(data))
      getStorageData()
  } else if (error) {
  }

  

  // -- handle Google Sign-In --
  const handleGoogleSignIn = async () => {
    try{
        setIsSubmitting(true)
        console.log(process.env.EXPO_PUBLIC_WEB_CLIENT_ID)
        await GoogleSignin.hasPlayServices()
        const response = await GoogleSignin.signIn()
        if (isSuccessResponse(response)) {
          const {idToken} = response.data
          if (idToken) {
            setGoogleToken(idToken)
            setIsEnabled(true)
          }
        } else {
            console.error("Google Sign-In failed:", response)
        }
    } catch (error) {
        if( isErrorWithCode(error)) {
          switch (error.code) {
            case statusCodes.SIGN_IN_CANCELLED:
                console.log("User cancelled the sign-in process")
                break;
            case statusCodes.IN_PROGRESS:
                console.log("Sign-in is already in progress")
                break;
            case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                console.log("Google Play Services not available")
                break;
            default:
                console.error("An error occurred during Google Sign-In:", error)
          }
        }
      setIsSubmitting(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.signInContainer}>
        <Text>sign_in</Text>
        {/* <CustomButton text="Sign in with Facebook" buttonPress={onFacebookSignIn} type="SECONDARY" />   */}
        <CustomButton text="Sign in with Google" buttonPress={() => handleGoogleSignIn()} type="SECONDARY" />  
        {/* <CustomButton text="Sign in with Apple" buttonPress={onAppleSignIn} type="SECONDARY" />   */}
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
})
