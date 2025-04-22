import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieList from "../components/MovieList";
import { useMovies } from "../utils/useMovies";

export default function HomeScreen() {
  const { getSection, loading, error } = useMovies();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#fff" }}>Error loading data</Text>
      </View>
    );
  }

  const featured = getSection("you-might-like")?.items[0];
  const youMightLike = getSection("you-might-like")?.items || [];
  const myList = getSection("my-list")?.items || [];
  const upcoming = getSection("upcoming")?.items || [];

  return (
    <ScrollView style={styles.container}>
      {featured && (
        <FeaturedMovie
          title={featured.title}
          year={featured.year}
          duration={featured.duration}
          rating={featured.rating}
          backgroundUrl={featured.posters.landscape?.url || ""}
        />
      )}

      <View style={styles.listsContainer}>
        <MovieList
          title="You might like"
          movies={youMightLike}
          aspectRatio={4 / 5}
          layout="portrait"
        />
        <MovieList
          title="My List"
          movies={myList}
          aspectRatio={16 / 9}
          layout="landscape"
        />
        <MovieList
          title="Upcoming"
          movies={upcoming}
          aspectRatio={16 / 9}
          layout="landscape"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  listsContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
});
