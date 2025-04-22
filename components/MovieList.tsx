import { View, Text, FlatList, StyleSheet } from "react-native";
import MovieCard from "./MovieCard";

interface MovieListProps {
  title: string;
  movies: { id: string; posters: any }[];
  aspectRatio: number;
  layout: "portrait" | "landscape";
}

export default function MovieList({
  title,
  movies,
  aspectRatio,
  layout,
}: MovieListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const imageUrl =
            layout === "portrait"
              ? item.posters.portrait?.url
              : item.posters.landscape?.url;
          const finalImageUrl =
            imageUrl || "https://via.placeholder.com/200x300?text=No+Image";

          return (
            <MovieCard imageUrl={finalImageUrl} aspectRatio={aspectRatio} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});
