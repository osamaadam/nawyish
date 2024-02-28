import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { fetchApartments } from "../actions/fetch_apartments";
import ApartmentsList from "../components/apartments_list";
import { Apartment } from "../types/apartment";

export default function ApartmentsView({
  baseUrl,
  navigation,
}: {
  baseUrl: string;
  navigation: any;
}) {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadApartments = useCallback(async () => {
    try {
      const res = await fetchApartments({ page, baseUrl });

      setApartments((prev) => [...prev, ...res]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
      navigation.navigate("Config");
    }
  }, [page, setPage, setApartments]);

  const refreshApartments = useCallback(async () => {
    try {
      setIsRefreshing(true);
      setApartments([]);
      setPage(1);
      await loadApartments();
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    refreshApartments();
  }, []);

  return (
    <View style={styles.container}>
      <ApartmentsList
        apartments={apartments}
        isRefreshing={isRefreshing}
        loadApartments={loadApartments}
        refreshApartments={refreshApartments}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
