# Quasar Streaming App – React Native Test

Este proyecto es una prueba técnica para la posición de React Native en Quasar Solutions. La app fue creada usando Expo y TypeScript, y simula una pantalla de inicio de una aplicación de streaming móvil.

## Lo que incluye

- Una pantalla de inicio que sigue el diseño del Figma.
- Película destacada en la parte superior con imagen y detalles.
- Secciones "You might like" y "My List" con scroll horizontal.
- Las imágenes respetan su proporción (4:5 para vertical y 16:9 para horizontal).
- Todo el contenido se carga desde un JSON remoto proporcionado por la prueba.
- Indicador de carga mientras se obtienen los datos.
- Si ocurre un error al cargar los datos, muestra un mensaje.

## 🔧 Tecnología utilizada

- React Native con Expo
- TypeScript
- React Navigation
- Hooks (useEffect, useState)
- Git para control de versiones

## Estructura general del proyecto

```
/components - Componentes reutilizables (FeaturedMovie, MovieCard, MovieList)
/screens - Pantallas (solo HomeScreen)
/utils - Hook personalizado para cargar los datos (useMovies)
/navigation - Stack Navigator
/assets - Imagen local de prueba
```

## ¿Cómo correrlo?

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el proyecto:

```bash
npx expo start
```

## Notas finales

- La app solo implementa la pantalla principal, como pedía la prueba.
- No se añadieron tests ni navegación extra por temas de tiempo.
- El diseño es lo más fiel posible al mockup de Figma, usando componentes propios.
- El código está dividido para ser fácil de mantener y reutilizar.

Gracias por la oportunidad :)
