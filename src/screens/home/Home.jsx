import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAppleNews } from "../api/newsService";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      const response = await getAppleNews();
      setArticles(response.articles);
      setLoader(false)
    };
    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => Linking.openURL(item.url)}
      style={styles.card}
    >
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.source}>{item.source.name}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.time}>2h ago</Text>
      </View>
    </TouchableOpacity>
  );
  if (loader) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.appleIcon}></Text>
              <Text style={styles.newsText}>News</Text>
            </View>
            <Text style={styles.date}>August 29</Text>
            <Text style={styles.topStories}>Top Stories</Text>
          </View>
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  appleIcon: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 5,
  },
  newsText: {
    fontSize: 24,
    fontWeight: "700",
  },
  date: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },
  topStories: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "deeppink", // fixed invalid "darkpink"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 10,
  },
  source: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});
