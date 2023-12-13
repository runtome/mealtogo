import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";


const firebaseConfig = {
  apiKey: "AIzaSyC9sg0Kr9dAiyKq_nu22s6F17VD5GSuycY",
  authDomain: "mealtogo-6568f.firebaseapp.com",
  projectId: "mealtogo-6568f",
  storageBucket: "mealtogo-6568f.appspot.com",
  messagingSenderId: "203479233484",
  appId: "1:203479233484:web:3049386d15bc203c8a6369",
  measurementId: "G-VMKZJNC2VT"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation/>
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}