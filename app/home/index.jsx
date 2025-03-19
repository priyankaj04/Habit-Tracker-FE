import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import dayjs from "dayjs";
import { C, T, vw } from "../../utils";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.background }}>
      <StatusBar style="dark" />
      {/* Change 'dark' or 'light' based on your theme */}
      <ScrollView
        contentContainerStyle={{
          backgroundColor: C.background,
          padding: 16,
          gap: 16,
        }}
      >
        <Text style={[T.semi(16), { textAlign: "center" }]}>
          {dayjs().format("DD MMM, hh:mm A")}
        </Text>
        <ImageBackground
          source={require("../../assets/images/streaksbg.png")}
          style={styles.card}
        >
          <View style={{ gap: 0, justifyContent:'center', flex: 1 }}>
            <Text style={[T.bold(36), { color: C.accent }]}>02</Text>
            <Text style={[T.medium(16), { color: C.accent }]}>days Streak</Text>
           {/*  <View style={{ width: 80, paddingVertical: 2, backgroundColor: C.border, borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Text style={[T.medium(12), { color: C.text }]}>Check</Text>
              <Ionicons name="chevron-forward" size={16} color="black" />
            </View> */}
          </View>
          <Image
            source={require("../../assets/images/goal.png")}
            style={styles.image}
          />
        </ImageBackground>
        <View>
          <Text style={[T.regular(16), { color: C.primary }]}>Challenges for Today</Text>

        </View>
        <View>
          <Text style={[T.regular(16), { color: C.primary }]}>Your Tasks</Text>

        </View>
        <View>
          <Text style={[T.regular(16), { color: C.primary }]}>Note Your Journal</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: "#fff",
    height: 130,
    overflow: "hidden",
    objectFit: "cover",
  },
  image: {
    width: 150,
    height: 150,
    position: "absolute", // Fixed `display: 'absolute'`
    right: -10,
    transform: [{ scaleX: -1 }],
  },
});
