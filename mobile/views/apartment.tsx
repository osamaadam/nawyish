import { Text, View, Image, StyleSheet } from "react-native";
import { Apartment } from "../types/apartment";

export default function ApartmentView({ route }: { route: any }) {
  const { apartment }: { apartment: Apartment } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://source.unsplash.com/random/400x300?house,${apartment.id}`,
        }}
      />
      <Text style={styles.title}>{apartment.address}</Text>
      <Text style={styles.price}>
        {Number(apartment.listingPrice).toLocaleString()} EGP
      </Text>
      <Text style={styles.description}>{apartment.description}</Text>
      <Table
        rows={[
          {
            title: "Bathrooms",
            description: apartment.numberOfBathrooms.toString(),
          },
          {
            title: "Bedrooms",
            description: apartment.numberOfBedrooms.toString(),
          },
          {
            title: "Square footage",
            description: apartment.squareFootage.toString(),
          },
          {
            title: "Furnished",
            description: apartment.isFurnished ? "Yes" : "No",
          },
          {
            title: "Monthly rent",
            description:
              Number(apartment.monthlyRent).toLocaleString() + " EGP",
          },
        ]}
      />
    </View>
  );
}

function Table({ rows }: { rows: { title: string; description: string }[] }) {
  return (
    <View>
      {rows.map((row) => (
        <View style={styles.row} key={row.title}>
          <Text style={styles.rowTitle}>{row.title}</Text>
          <Text>{row.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTitle: {
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
