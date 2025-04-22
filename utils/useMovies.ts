import { useEffect, useState } from "react";

const API_URL =
  "https://gist.githubusercontent.com/feresq-quasar/0d0c407bfc00b262d695a629bba8f92d/raw";

interface Poster {
  url: string;
  aspectRatio: string;
}

interface Movie {
  id: string;
  title: string;
  posters: {
    portrait?: Poster;
    landscape?: Poster;
    thumbnail?: Poster;
  };
  [key: string]: any;
}

interface Container {
  id: string;
  title: string;
  layout: "portrait-card" | "landscape-card";
  items: Movie[];
}

export function useMovies() {
  const [containers, setContainers] = useState<Container[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setContainers(data.containers || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading movies:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const getSection = (sectionId: string): Container | undefined =>
    containers.find((c) => c.id === sectionId);

  return { containers, getSection, loading, error };
}
