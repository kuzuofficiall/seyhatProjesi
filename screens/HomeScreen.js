import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Arka plan resmi */}
      <Image source={require("../assets/bg.jpg")} style={styles.bg} />

      {/* İçerik bölümü */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Dijital Bilet</Text>
        <Text style={styles.subtitle}>
          Seyahatleriniz, iş gezileriniz, ulaşım, konaklama ve yemek
          ihtiyaçlarınız için kolay bilet çözümleri.
        </Text>

        {/* Keşfet butonu */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.buttonText}>Keşfet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1, // İçeriğin arka planda kalmasını sağlar
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Arka planı yarı saydam yapar
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4D9EF8",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Android için gölge
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
