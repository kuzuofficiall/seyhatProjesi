import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailScreen({ route }) {
  // route.params ile ExploreScreen'den gelen parametreleri alıyoruz.
  const { title, image, price, location, rating, description } =
    route.params || {
      title: "Ski Villa",
      image: require("../assets/villa.jpg"),
      price: 1000,
      location: "France",
      rating: 4.5,
      description: "Ski Villa offers simple rooms with mountain views...",
    };

  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.headerImage} />}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>
          {location} ★ {rating}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>

        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => alert("Booking Confirmed!")}
        >
          <Text style={styles.bookingText}>BOOKING</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EEF4FF" },
  headerImage: { width: "100%", height: 250 },
  infoContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  location: { fontSize: 16, color: "#555", marginBottom: 10 },
  description: { fontSize: 14, color: "#666", marginBottom: 20 },
  price: { fontSize: 24, color: "#1E88E5", marginBottom: 20 },
  bookingButton: {
    backgroundColor: "#4D9EF8",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  bookingText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
