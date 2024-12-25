import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export function TrainScreen() {
  const trainDetails = [
    {
      title: "Öne Çıkan Tren Rotaları",
      content: ["Paris - Amsterdam", "Berlin - Prag", "İstanbul - Ankara"],
    },
    {
      title: "Bilet ve Rezervasyon Bilgisi",
      content: [
        "Biletlerinizi çevrimiçi veya tren istasyonlarından satın alabilirsiniz.",
        "Rezervasyon yaparken sınıf seçeneklerini göz önünde bulundurun.",
      ],
    },
    {
      title: "Sınıf Seçenekleri",
      content: [
        "Ekonomi: Uygun fiyatlı oturma düzeni.",
        "Business: Daha geniş koltuklar ve sessiz alanlar.",
        "Birinci Sınıf: Ekstra konfor ve özel hizmetler.",
      ],
    },
    {
      title: "Tren Özellikleri",
      content: [
        "Yüksek hızlı trenler: Hızlı ve konforlu ulaşım.",
        "Manzaralı rotalar: Doğal güzellikleri seyredin.",
        "Gece trenleri: Yataklı kompartmanlarla rahat yolculuk.",
      ],
    },
    {
      title: "Bagaj Politikası",
      content: [
        "El bagajı: 8 kg sınırı.",
        "Kayıtlı bagaj: 20 kg'a kadar ücretsizdir.",
      ],
    },
    {
      title: "Ek Hizmetler",
      content: [
        "Wi-Fi: Bazı trenlerde ücretsiz.",
        "Yemek servisi: Yolculuk sırasında atıştırmalık ve içecekler.",
        "Eğlence: Bazı trenlerde film ve müzik seçenekleri.",
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Tren Seyahati</Text>
      {trainDetails.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.content.map((item, idx) => (
            <Text key={idx} style={styles.sectionContent}>
              - {item}
            </Text>
          ))}
        </View>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Tren Bileti Rezerve Edildi!")}
      >
        <Text style={styles.buttonText}>Bilet Al</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2C3E50",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#34495E",
  },
  sectionContent: {
    fontSize: 16,
    color: "#7F8C8D",
    marginBottom: 5,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#3498DB",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TrainScreen;
