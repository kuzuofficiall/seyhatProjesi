import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const activities = [
  {
    id: "1",
    name: "Doğa Yürüyüşü",
    location: "Uludağ, Türkiye",
    price: "50 TL / kişi",
    difficulty: "Kolay",
    ageLimit: "10+",
    equipment: ["Rahat ayakkabı", "Su şişesi", "Sırt çantası"],
    description: "Büyüleyici doğa manzaraları eşliğinde yürüyüş keyfi.",
    image: require("../assets/Doğa Yürüyüşü.jpg"),
  },
  {
    id: "2",
    name: "Yamaç Paraşütü",
    location: "Ölüdeniz, Türkiye",
    price: "500 TL / kişi",
    difficulty: "Orta",
    ageLimit: "16+",
    equipment: ["Kask", "Paraşüt"],
    description:
      "Ege Denizi'nin muhteşem manzarası eşliğinde unutulmaz bir deneyim.",
    image: require("../assets/Yamaç Paraşütü.jpg"),
  },
  {
    id: "3",
    name: "Dalış",
    location: "Kaş, Türkiye",
    price: "300 TL / kişi",
    difficulty: "Zor",
    ageLimit: "18+",
    equipment: ["Dalış kıyafeti", "Şnorkel", "Maske"],
    description: "Akdeniz'in eşsiz su altı dünyasını keşfedin.",
    image: require("../assets/sualtı.jpg"),
  },
];

export function AdventureScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Macera Sizi Bekliyor</Text>
      <Text style={styles.description}>
        Yakınınızdaki heyecan verici aktiviteleri ve maceraları keşfedin.
      </Text>
      <FlatList
        data={activities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityCard}>
            <Image source={item.image} style={styles.activityImage} />
            <Text style={styles.activityName}>{item.name}</Text>
            <Text style={styles.activityLocation}>Konum: {item.location}</Text>
            <Text style={styles.activityPrice}>Fiyat: {item.price}</Text>
            <Text style={styles.activityDifficulty}>
              Zorluk: {item.difficulty}
            </Text>
            <Text style={styles.activityAgeLimit}>
              Yaş Sınırı: {item.ageLimit}
            </Text>
            <Text style={styles.activityEquipment}>
              Gerekli Ekipman: {item.equipment.join(", ")}
            </Text>
            <Text style={styles.activityDescription}>{item.description}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                alert(`${item.name} için rezervasyon yapılıyor...`)
              }
            >
              <Text style={styles.buttonText}>Rezervasyon Yap</Text>
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
  activityCard: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  activityImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  activityLocation: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  activityPrice: {
    fontSize: 14,
    color: "#444",
    marginBottom: 5,
  },
  activityDifficulty: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  activityAgeLimit: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  activityEquipment: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  activityDescription: {
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

export default AdventureScreen;
