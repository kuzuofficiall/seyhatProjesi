import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Destinasyonların listesi. Her biri farklı bir tatil seçeneği sunar.
const destinations = [
  {
    title: "Kayak Villası",
    image: require("../assets/villa.jpg"),
    price: 1000,
    location: "Fransa",
    rating: 4.5,
    description:
      "Ski Villa, kayak merkezine giden teleferiğin önünde, dağ manzaralı basit odalar sunmaktadır. 1.702 metre yükseklikte Alpler'de yer alır.",
  },
  {
    title: "Sahil Tesisi",
    image: require("../assets/beach.jpg"),
    price: 1200,
    location: "Maldivler",
    rating: 4.8,
    description:
      "Beyaz kumlar ve turkuaz sulara sahip egzotik bir sahil tesisi. Lüks ve rahatlama için ideal bir yer.",
  },
  {
    title: "Dağ Kulübesi",
    image: require("../assets/cabin.jpg"),
    price: 800,
    location: "İsviçre",
    rating: 4.7,
    description:
      "İsviçre Alpleri'nde yer alan huzurlu bir kaçış noktası sunan rahat bir dağ kulübesi.",
  },
  {
    title: "Safari Konağı",
    image: require("../assets/safari.jpg"),
    price: 1500,
    location: "Kenya",
    rating: 4.9,
    description:
      "Afrika'nın vahşi yaşamını lüks bir safari lodgesinde yaşayın. Rehberli turlar ve vahşi yaşam gözlemleri dahildir.",
  },
  {
    title: "Tarihi Kale",
    image: require("../assets/castle.jpg"),
    price: 2000,
    location: "İskoçya",
    rating: 4.6,
    description:
      "Tarihi bir kalede kalın ve ortaçağ ihtişamını modern olanaklarla birlikte yaşayın.",
  },
  {
    title: "Şehir Dairesi",
    image: require("../assets/city.jpg"),
    price: 900,
    location: "New York",
    rating: 4.4,
    description:
      "Şehrin kalbinde modern bir daire. Başlıca cazibe merkezlerine ve gece hayatına yakın bir konumdadır.",
  },
  {
    title: "Dağ Evi",
    image: require("../assets/chalet.jpg"),
    price: 1100,
    location: "Avusturya",
    rating: 4.8,
    description:
      "Büyüleyici bir dağ evi, nefes kesen manzaralarla çevrilidir. Aileler ve kış sporları tutkunları için idealdir.",
  },
  {
    title: "Çöl Kampı",
    image: require("../assets/desert.jpg"),
    price: 700,
    location: "Fas",
    rating: 4.5,
    description:
      "Deve turları ve berrak gece gökyüzü altında yıldız gözlemi ile otantik bir çöl kampı deneyimi.",
  },
  {
    title: "Orman Tatili",
    image: require("../assets/jungle.jpg"),
    price: 1300,
    location: "Brezilya",
    rating: 4.7,
    description:
      "Amazon ormanlarının yemyeşil doğasında kendinizi kaybedin. Rehberli yürüyüşler ve vahşi yaşam keşifleri sunar.",
  },
  {
    title: "Göl Kenarı Kulübesi",
    image: require("../assets/lake.jpg"),
    price: 950,
    location: "Kanada",
    rating: 4.6,
    description:
      "Panoramik manzaralara sahip sakin bir göl kenarı evi. Su sporları aktivitelerine erişim imkanı sunar.",
  },
  {
    title: "Safari Kampı",
    image: require("../assets/safari.jpg"),
    price: 1400,
    location: "Güney Afrika",
    rating: 4.9,
    description:
      "Afrika vahşi yaşamının güzelliklerini keşfedin. Macera severler için özel deneyimler sunar.",
  },
];

export default function ExploreScreen() {
  const navigation = useNavigation();

  // İkonların listesi. Kullanıcıların farklı ulaşım ve aktivite seçeneklerini seçmesini sağlar.
  const icons = [
    { label: "Flight", icon: "✈️", screen: "Flight" },
    { label: "Train", icon: "🚆", screen: "Train" },
    { label: "Bus", icon: "🚌", screen: "Bus" },
    { label: "Taxi", icon: "🚖", screen: "Taxi" },
    { label: "Hotel", icon: "🏨", screen: "Hotel" },
    { label: "Eats", icon: "🍽️", screen: "Eats" },
    { label: "Adventure", icon: "⛷️", screen: "Adventure" },
    { label: "Event", icon: "🎉", screen: "Event" },
  ];

  return (
    <View style={styles.container}>
      {/* Başlık ve ikonlar bölümü */}
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Macera için hazır mısınız?</Text>
        <View style={styles.iconRow}>
          {icons.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.iconBox}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.iconText}>{item.icon}</Text>
              <Text style={styles.iconLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Destinasyon başlığı */}
      <Text style={styles.destinationTitle}>Destinasyonlar</Text>

      {/* Destinasyon kartlarının listesi */}
      <FlatList
        data={destinations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Details", {
                title: item.title,
                image: item.image,
                price: item.price,
                location: item.location,
                rating: item.rating,
                description: item.description,
              })
            }
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>
                {item.location} ★ {item.rating}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.destinationContainer}
      />
    </View>
  );
}

// Stillerin tanımlandığı bölüm.
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EEF4FF" },
  headerSection: { padding: 20 },
  headerText: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  iconRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  iconBox: {
    width: "22%",
    backgroundColor: "#FFF",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  iconLabel: { fontSize: 12, marginTop: 5 },
  destinationTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  destinationContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: { width: "100%", height: 200 },
  cardContent: { padding: 10 },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  cardSubtitle: { fontSize: 14, color: "#888" },
});
