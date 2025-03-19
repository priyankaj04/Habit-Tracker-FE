import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import dayjs from 'dayjs';
import { C, T } from '../../utils'
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={C.background} style={{color: C.text}} />
      <ScrollView contentContainerStyle={{flex: 1, backgroundColor: C.background}}>
        <Text style={[T.bold(16), {}]}>{dayjs().format('DD MMM hh:mm A')}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})