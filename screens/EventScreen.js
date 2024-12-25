export function EventScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <Text style={styles.description}>
        Discover local events and activities happening near you.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Event Added to Calendar!")}
      >
        <Text style={styles.buttonText}>View Events</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF4FF",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4D9EF8",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default EventScreen();
