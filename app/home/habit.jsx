import { ScrollView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { C, T, vw } from "@/utils";
import React, { useEffect, useState } from 'react';
import { GetHabits } from '@/utils/api';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

const Habit = () => {
  const [allHabits, setAllHabits] = useState([]);

  useEffect(() => {
    GetAllHabits();
  }, []);

  const GetAllHabits = async () => {
    try {
      const resp = await GetHabits();
      console.log("resp", resp);
      if (resp.status) {
        setAllHabits(resp?.data);
      } else {
        setAllHabits([]);
      }
    } catch (err) {
      console.error(err);
      setAllHabits([]);
    }
  };

  const toggleHabit = (id) => {
    setAllHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.background }}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          gap: 16,
        }}
      >
        {allHabits?.sort((a, b) => Number(a.completed) - Number(b.completed))?.map((item, index) => (
          <TouchableOpacity key={item.id || index} style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox value={item.completed} onValueChange={() => toggleHabit(item.id)} />
              <Text style={[T.medium(16), styles.habitText, item.completed && styles.strikethrough]}>{item.name}</Text>
            </View>
            <Feather name="chevron-right" size={20} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Habit;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  habitText: {
    marginLeft: 10,
    color: '#333',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: C.caption,
  }
});
