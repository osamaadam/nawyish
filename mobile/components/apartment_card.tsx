import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Apartment } from "../types/apartment";

export default function ApartmentCard({
  apartment,
  navigator,
}: {
  apartment: Apartment;
  navigator: any;
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigator.navigate("Apartment", { apartment });
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: `https://source.unsplash.com/random/400x300?house,${apartment.id}`,
        }}
      />
      <Text style={styles.title}>{apartment.address}</Text>
      <Text style={styles.description}>{apartment.description}</Text>
      <Text style={styles.price}>
        {Number(apartment.listingPrice).toLocaleString()} EGP
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    gap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    opacity: 0.7,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
