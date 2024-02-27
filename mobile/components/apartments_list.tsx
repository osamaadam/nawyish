import { FlatList, StyleSheet } from "react-native";
import { Apartment } from "../types/apartment";
import ApartmentCard from "./apartment_card";

export default function ApartmentsList({
  apartments,
}: {
  apartments: Apartment[];
}) {
  return (
    <FlatList
      style={styles.container}
      data={apartments}
      renderItem={({ item }) => <ApartmentCard apartment={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
  },
});
