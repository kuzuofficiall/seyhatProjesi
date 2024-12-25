import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const hotels = [
  {
    id: "1",
    name: "Luxury Beach Resort",
    location: "Maldives",
    priceRange: "$200 - $500 per night",
    stars: 5,
    reviews: 4.8,
    features: ["Wi-Fi", "Kahvaltı dahil", "Havuz", "Spa"],
    image: require("../assets/otel.jpg"),
  },
  {
    id: "2",
    name: "Mountain Ski Lodge",
    location: "Switzerland",
    priceRange: "$150 - $400 per night",
    stars: 4,
    reviews: 4.5,
    features: ["Wi-Fi", "Kayak ekipmanı kiralama", "Isıtmalı havuz"],
    image: require("../assets/mountion.jpg"),
  },
  {
    id: "3",
    name: "City Center Hotel",
    location: "New York, USA",
    priceRange: "$100 - $300 per night",
    stars: 4,
    reviews: 4.2,
    features: ["Wi-Fi", "Merkezi konum", "Kahvaltı"],
    image: require("../assets/City Center Hotel.jpg"),
  },
  {
    id: "4",
    name: "Desert Oasis Resort",
    location: "Dubai, UAE",
    priceRange: "$250 - $600 per night",
    stars: 5,
    reviews: 4.9,
    features: ["Wi-Fi", "Havuz", "Spa", "Lüks odalar"],
    image: require("../assets/desert.jpg"),
  },
  {
    id: "5",
    name: "Tropical Paradise Inn",
    location: "Bali, Indonesia",
    priceRange: "$120 - $400 per night",
    stars: 4,
    reviews: 4.6,
    features: ["Wi-Fi", "Deniz manzarası", "Kahvaltı dahil", "Spa"],
    image: require("../assets/Tropical Paradise Inn.jpg"),
  },
  {
    id: "6",
    name: "Historic Castle Hotel",
    location: "Edinburgh, Scotland",
    priceRange: "$200 - $500 per night",
    stars: 5,
    reviews: 4.7,
    features: ["Wi-Fi", "Tarihi atmosfer", "Kahvaltı", "Şömine"],
    image: require("../assets/City Center Hotel.jpg"),
  },
  {
    id: "7",
    name: "Safari Lodge",
    location: "Kenya",
    priceRange: "$300 - $700 per night",
    stars: 5,
    reviews: 4.8,
    features: ["Wi-Fi", "Safari turları", "Havuz", "Doğa manzarası"],
    image: require("../assets/Safari Lodge.jpg"),
  },
  {
    id: "8",
    name: "Snowy Peaks Retreat",
    location: "Alaska, USA",
    priceRange: "$180 - $450 per night",
    stars: 4,
    reviews: 4.5,
    features: ["Wi-Fi", "Kış aktiviteleri", "Şömine", "Dağ manzarası"],
    image: require("../assets/Snowy Peaks Retreat.jpg"),
  },
];

export function HotelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Otel Rezervasyonu</Text>
      <Text style={styles.description}>
        Konaklamanız için en iyi otelleri bulun ve rezerve edin.
      </Text>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hotelCard}>
            <Image source={item.image} style={styles.hotelImage} />
            <Text style={styles.hotelName}>{item.name}</Text>
            <Text style={styles.hotelLocation}>{item.location}</Text>
            <Text style={styles.hotelPrice}>{item.priceRange}</Text>
            <Text style={styles.hotelStars}>{"⭐".repeat(item.stars)}</Text>
            <Text style={styles.hotelReviews}>
              Değerlendirme: {item.reviews}/5
            </Text>
            <Text style={styles.hotelFeatures}>
              Özellikler: {item.features.join(", ")}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                alert(`${item.name} için rezervasyon yapılıyor...`)
              }
            >
              <Text style={styles.buttonText}>Hemen Rezerve Et</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF4FF",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  hotelCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  hotelImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  hotelLocation: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  hotelPrice: {
    fontSize: 14,
    color: "#444",
    marginBottom: 5,
  },
  hotelStars: {
    fontSize: 14,
    color: "#FFD700",
    marginBottom: 5,
  },
  hotelReviews: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  hotelFeatures: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4D9EF8",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HotelScreen;
