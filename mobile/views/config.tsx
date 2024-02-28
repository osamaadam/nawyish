import { useCallback, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ping } from "../actions/ping";

export default function ConfigView({
  navigation,
  baseUrl,
  setBaseUrl,
}: {
  navigation: any;
  baseUrl: string;
  setBaseUrl: (url: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const parsedUrl = new URL(baseUrl);
      const isValid = await ping(parsedUrl);
      if (!isValid) {
        setError(
          "Couldn't ping server, are you sure it's accessible from your device?"
        );
        return;
      }
      setError(null);
      setBaseUrl(parsedUrl.toString());
      navigation.navigate("Apartments");
    } catch (err) {
      console.error(err);
      setError(
        "Couldn't ping server, are you sure it's accessible from your device?"
      );
    } finally {
      setIsLoading(false);
    }
  }, [baseUrl, setBaseUrl, navigation, setIsLoading, setError]);

  return (
    <View style={style.container}>
      <Text style={style.description}>Enter the server URL</Text>
      <TextInput
        style={style.textInput}
        placeholder="http://192.168.1.103:3000"
        value={baseUrl}
        onChangeText={setBaseUrl}
      />
      <Button title="Save" onPress={handleSubmit} disabled={isLoading} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    gap: 20,
  },
  description: {
    opacity: 0.7,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});
