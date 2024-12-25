import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export function FlightScreen() {
  const airlines = [
    {
      name: "THY",
      baggage: "El bagajı: 8kg, Kayıtlı bagaj: 30kg",
      meals: "Ücretsiz yemek ve içecek servisi",
    },
    {
      name: "SunExpress",
      baggage: "El bagajı: 8kg, Kayıtlı bagaj: 20kg",
      meals: "Yemekler ücret karşılığı sunulmaktadır",
    },
    {
      name: "AnadoluJet",
      baggage: "El bagajı: 8kg, Kayıtlı bagaj: 15kg",
      meals: "Yemek servisi bulunmamaktadır",
    },
    {
      name: "Pegasus",
      baggage: "El bagajı: 8kg, Kayıtlı bagaj: 20kg",
      meals: "Yemekler ücret karşılığı sunulmaktadır",
    },
  ];

  const popularRoutes = [
    "İstanbul - Londra",
    "New York - Paris",
    "Tokyo - Sydney",
    "Dubai - Singapur",
    "Los Angeles - Hong Kong",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Havayolu Rehberi</Text>
      {airlines.map((airline, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.airlineName}>{airline.name}</Text>
          <Text style={styles.info}>Bagaj Politikası: {airline.baggage}</Text>
          <Text style={styles.info}>Yemek Seçenekleri: {airline.meals}</Text>
        </View>
      ))}
      <Text style={styles.subHeader}>Popüler Uçuş Rotaları</Text>
      {popularRoutes.map((route, index) => (
        <View key={index} style={styles.routeCard}>
          <Text style={styles.routeText}>{route}</Text>
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Daha fazla havayolu ve rota yakında eklenecek!")}
      >
        <Text style={styles.buttonText}>Daha Fazlasını Keşfet</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#EEF4FF",
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    textAlign: "left",
    color: "#333",
  },
  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  routeCard: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  airlineName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4D9EF8",
  },
  info: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  routeText: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#4D9EF8",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FlightScreen;
