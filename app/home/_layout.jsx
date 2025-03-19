import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Slot } from "expo-router";
import BottomBar from "../../components/Bottombar";

const _layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'transparent', // Adjust based on your theme
        paddingBottom: 10,
      }}>
        <BottomBar />
      </View>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({})