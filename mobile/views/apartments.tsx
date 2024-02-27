import { StatusBar } from "expo-status-bar";
import { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchApartments } from "../actions/fetch_apartments";
import { Apartment } from "../types/apartment";
import ApartmentsList from "../components/apartments_list";

export default function ApartmentsView() {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  const loadApartments = useCallback(async (page = 1) => {
    try {
      const res = await fetchApartments({ page });

      setApartments((prev) => [...prev, ...res]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadApartments();
  }, [loadApartments]);

  return (
    <View style={styles.container}>
      <ApartmentsList apartments={apartments} />
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
