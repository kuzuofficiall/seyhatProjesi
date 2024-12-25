import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

export function TaxiScreen() {
  const taxiDetails = [
    {
      title: "Popüler Taksi Rotaları",
      content: ["Havaalanı - Şehir Merkezi", "Otogar - Turistik Bölge"],
    },
    {
      title: "Fiyat Bilgisi",
      content: [
        "Kilometre başına ücret: X TL",
        "Trafik yoğunluğuna bağlı ek ücretler.",
      ],
    },
    {
      title: "Rezervasyon Özellikleri",
      content: [
        "Taksi rezervasyonu için mobil uygulamaları kullanabilirsiniz.",
        "Önceden rezervasyon yapıldığında garantili araç temini.",
      ],
    },
    {
      title: "Araç Özellikleri",
      content: ["Klima", "Çocuk koltuğu", "Bagaj kapasitesi"],
    },
    {
      title: "Ödeme Yöntemleri",
      content: ["Nakit ödeme.", "Kredi kartı ve mobil ödeme seçenekleri."],
    },
    {
      title: "Güvenlik ve Sürücü Bilgileri",
      content: [
        "Sürücü kimlik bilgilerini kontrol edin.",
        "Yolculuk sırasında GPS takibi yapabilirsiniz.",
      ],
    },
    {
      title: "Trafik ve Bekleme Bilgileri",
      content: [
        "Trafik yoğunluğu olan saatlerde bekleme sürelerini göz önünde bulundurun.",
      ],
    },
    {
      title: "Taksi Türleri",
      content: [
        "Standart Taksi",
        "Lüks Taksi",
        "Paylaşımlı Taksi (örneğin Uber Pool gibi)",
      ],
    },
    {
      title: "Destek ve İletişim",
      content: [
        "Taksi çağırma sırasında yardım alabileceğiniz bir destek hattı.",
      ],
    },
  ];

  const handlePress = () => {
    Alert.alert(
      "Taksi Numaraları",
      "1. Taksi Durağı: 0212 123 4567\n2. Taksi Durağı: 0216 987 6543\n3. Taksi Durağı: 0312 765 4321",
      [{ text: "Tamam" }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Taksi Hizmetleri</Text>
      {taxiDetails.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.content.map((item, idx) => (
            <Text key={idx} style={styles.sectionContent}>
              - {item}
            </Text>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Taksi Çağır</Text>
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2C3E50",
    textTransform: "uppercase",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#34495E",
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    paddingBottom: 5,
  },
  sectionContent: {
    fontSize: 18,
    color: "#4B5563",
    marginBottom: 8,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#1F78B4",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default TaxiScreen;
