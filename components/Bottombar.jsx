import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { C, vw } from '@/utils'
import React from 'react'
import { usePathname, useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Bottombar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (route) => pathname === route;

  return (
    <View style={{ width: vw(100), paddingVertical: 8, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: vw(80), backgroundColor: C.primary, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 50, flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Habits */}
        <TouchableOpacity onPress={() => router.push('/home/habit')} style={{ padding: 8, borderRadius: 50, backgroundColor: isActive('/home/habit') ? C.accent : C.secondary, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome6 name="calendar-check" size={20} color={isActive('/home/habit') ? C.primary : '#fff'} />
        </TouchableOpacity>

        {/* Jounals */}
        <TouchableOpacity onPress={() => router.push('/home/journal')} style={{ padding: 8, borderRadius: 50, backgroundColor: isActive('/home/journal') ? C.accent : C.secondary, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialCommunityIcons name="notebook-edit-outline" size={20} color={isActive('/home/journal') ? C.primary : '#fff'} />
        </TouchableOpacity>

        {/* Home */}
        <TouchableOpacity onPress={() => router.push('/home')} style={{ padding: 8, borderRadius: 50, backgroundColor: isActive('/home') ? C.accent : C.secondary, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="home" size={24} color={isActive('/home') ? C.primary : '#fff'} />
        </TouchableOpacity>

        {/* Todo */}
        <TouchableOpacity onPress={() => router.push('/home/todo')} style={{ padding: 8, borderRadius: 50, backgroundColor: isActive('/home/todo') ? C.accent : C.secondary, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="list-outline" size={20} color={isActive('/home/todo') ? C.primary : '#fff'} />
        </TouchableOpacity>

        {/* Workout */}
        <TouchableOpacity onPress={() => router.push('/home/workout')} style={{ padding: 8, borderRadius: 50, backgroundColor: isActive('/home/workout') ? C.accent : C.secondary, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="directions-run" size={20} color={isActive('/home/workout') ? C.primary : '#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Bottombar;

const styles = StyleSheet.create({});