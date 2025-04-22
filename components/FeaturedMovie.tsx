import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import featuredImage from "../assets/images/featured-banner.png";

const { width } = Dimensions.get("window");

interface FeaturedMovieProps {
  title: string;
  year: string;
  duration: string;
  rating: string;
  backgroundUrl?: string;
}

export default function FeaturedMovie({
  title,
  year,
  duration,
  rating,
  backgroundUrl,
}: FeaturedMovieProps) {
  const imgSource = backgroundUrl ? { uri: backgroundUrl } : featuredImage;

  return (
    <View style={styles.container}>
      <Image
        source={imgSource}
        style={styles.backgroundImage}
        blurRadius={10}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>
          {year} • {duration} • <Text style={styles.badge}>{rating}</Text>
        </Text>
        <View style={styles.trending}>
          <Ionicons name="calendar-outline" size={16} color="white" />
          <Text style={styles.trendingText}> #1 in Movies Today</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 300,
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  meta: {
    color: "#ccc",
    marginTop: 5,
  },
  badge: {
    backgroundColor: "#555",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    color: "#fff",
    overflow: "hidden",
  },
  trending: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  trendingText: {
    color: "#fff",
    fontSize: 14,
  },
});
