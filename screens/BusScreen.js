import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export function BusScreen() {
  const busDetails = [
    {
      title: "Popüler Otobüs Rotaları",
      content: ["İstanbul - Ankara", "İzmir - Antalya", "Berlin - Münih"],
    },
    {
      title: "Bilet ve Rezervasyon Bilgisi",
      content: [
        "Biletlerinizi online olarak satın alabilirsiniz.",
        "Erken rezervasyon yaparak uygun fiyat avantajlarından yararlanabilirsiniz.",
      ],
    },
    {
      title: "Otobüs Sınıfları",
      content: [
        "Ekonomi: Standart koltuk düzeni.",
        "Lüks: Daha geniş koltuklar ve ekstra diz mesafesi.",
        "VIP: 2+1 koltuk düzeni, TV ve atıştırmalık servisi.",
      ],
    },
    {
      title: "Otobüs Özellikleri",
      content: [
        "Wi-Fi: Çoğu otobüste ücretsiz sunulur.",
        "USB şarj noktaları: Elektronik cihazlarınızı kolayca şarj edebilirsiniz.",
        "Eğlence sistemleri: Film ve müzik seçenekleri.",
      ],
    },
    {
      title: "Bagaj Politikası",
      content: [
        "El bagajı: 5 kg'a kadar.",
        "Kayıtlı bagaj: 20 kg'a kadar ücretsizdir.",
      ],
    },
    {
      title: "Dinlenme Molaları",
      content: [
        "Uzun yolculuklarda belirli tesislerde mola verilir.",
        "Mola süreleri genellikle 15-30 dakika arasında değişir.",
      ],
    },
    {
      title: "Yolculuk Süresi ve Trafik Bilgisi",
      content: [
        "Yolculuk süresi rotaya ve trafik durumuna göre değişiklik gösterebilir.",
        "Güzergah bilgilerini önceden kontrol edebilirsiniz.",
      ],
    },
    {
      title: "Çevrim İçi Yolculuk Takibi",
      content: [
        "Otobüs yolculuğunuzu mobil uygulama veya web sitesi üzerinden takip edebilirsiniz.",
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Otobüs Hizmetleri</Text>
      {busDetails.map((section, index) => (
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
        onPress={() => alert("Otobüs Bileti Rezerve Edildi!")}
      >
        <Text style={styles.buttonText}>Bilet Al</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F4F6",
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
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
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

export default BusScreen;
