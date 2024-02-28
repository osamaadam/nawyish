import { FlatList, StyleSheet } from "react-native";
import { Apartment } from "../types/apartment";
import ApartmentCard from "./apartment_card";

export default function ApartmentsList({
  apartments,
  isRefreshing,
  loadMore,
  refreshApartments,
  navigator,
}: {
  apartments: Apartment[];
  isRefreshing: boolean;
  loadMore: () => void;
  refreshApartments: () => Promise<void>;
  navigator: any;
}) {
  /*
   * I've spent more time than I'd like to admit figuring out why the
   * Shipments were loading twice.
   * Long story short, the flatlist was rendering before the elements
   * were there and it was causing the loadMore function to be called
   * twice.
   */
  if (!apartments.length) return null;
  return (
    <FlatList
      style={styles.container}
      data={apartments}
      renderItem={({ item }) => (
        <ApartmentCard apartment={item} navigator={navigator} />
      )}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMore}
      onRefresh={refreshApartments}
      refreshing={isRefreshing}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
  },
});
