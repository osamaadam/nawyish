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

  const loadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [setPage]);

  const loadApartments = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const res = await fetchApartments({
        page,
        baseUrl,
      });

      if (page === 1) {
        setApartments(res);
        return;
      }

      setApartments((prev) => [...prev, ...res]);
    } catch (error) {
      console.error(error);
      navigation.navigate("Config");
    } finally {
      setIsRefreshing(false);
    }
  }, [page, baseUrl, setApartments, setIsRefreshing, navigation]);

  const refreshApartments = useCallback(async () => {
    setApartments([]);
    setPage(1);
    loadApartments();
  }, [setApartments, setPage]);

  useEffect(() => {
    if (page <= 0) return;
    loadApartments();
  }, [page]);

  return (
    <View style={styles.container}>
      <ApartmentsList
        apartments={apartments}
        isRefreshing={isRefreshing}
        loadMore={loadMore}
        refreshApartments={refreshApartments}
        navigator={navigation}
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
