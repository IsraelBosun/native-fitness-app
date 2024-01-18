import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();
    console.log("got items", item)
  return (
    <View className ="mt-20">
        <Text>Exercise</Text>
        <TouchableOpacity onPress={()=> router.back()}>
            <Text>Go back</Text>
        </TouchableOpacity>
    </View>
  )
}