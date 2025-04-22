# Architecture Notes

- The project uses Expo with React Native and TypeScript.
- Navigation is handled via React Navigation (stack-based).
- A single HomeScreen renders all sections using reusable components.
- Movie data is loaded via a custom hook (`useMovies`) from a remote JSON.
- Featured movie and section cards are styled with flexible aspect ratios.
