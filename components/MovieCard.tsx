import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface MovieCardProps {
  imageUrl: string;
  aspectRatio: number;
}

export default function MovieCard({ imageUrl, aspectRatio }: MovieCardProps) {
  return (
    <TouchableOpacity style={[styles.card, { aspectRatio }]}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
