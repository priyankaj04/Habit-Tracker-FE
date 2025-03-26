import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { C, T, vw } from "@/utils";
import React from 'react'

const Journal = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.background }}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
      >
        <Text>Journal</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Journal

const styles = StyleSheet.create({})