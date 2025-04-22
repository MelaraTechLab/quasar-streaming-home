import { ScrollView, StyleSheet, View } from "react-native";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieList from "../components/MovieList";

export default function HomeScreen() {
  const mockMoviesPortrait = [
    {
      id: "1",
      posters: {
        portrait: {
          url: "https://i.imgur.com/FYzI4BR.jpg",
        },
      },
    },
    {
      id: "2",
      posters: {
        portrait: {
          url: "https://i.imgur.com/MLzV3KH.jpg",
        },
      },
    },
    {
      id: "3",
      posters: {
        portrait: {
          url: "https://i.imgur.com/njxQGeH.jpg",
        },
      },
    },
  ];

  const mockMoviesLandscape = [
    {
      id: "a",
      posters: {
        landscape: {
          url: "https://i.imgur.com/JlVhHzj.jpg",
        },
      },
    },
    {
      id: "b",
      posters: {
        landscape: {
          url: "https://i.imgur.com/pv92cPo.jpg",
        },
      },
    },
  ];

  const mockMoviesUpcoming = [
    {
      id: "u1",
      posters: {
        landscape: {
          url: "https://i.imgur.com/5zA03s1.jpg",
        },
      },
    },
    {
      id: "u2",
      posters: {
        landscape: {
          url: "https://i.imgur.com/4fLUSJt.jpg",
        },
      },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <FeaturedMovie
        title="Generic Movie Title"
        year="2025"
        duration="1H 52MIN"
        rating="PG-13"
        backgroundUrl=""
      />
      <View style={styles.listsContainer}>
        <MovieList
          title="You might like"
          movies={mockMoviesPortrait}
          aspectRatio={4 / 5}
          layout="portrait"
        />
        <MovieList
          title="My List"
          movies={mockMoviesLandscape}
          aspectRatio={16 / 9}
          layout="landscape"
        />
        <MovieList
          title="Upcoming"
          movies={mockMoviesUpcoming}
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
  listsContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
});
