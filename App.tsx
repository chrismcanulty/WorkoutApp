import * as React from 'react';
import { StatusBar } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

export default function App() {
  const isLoaded = useCachedResources();

  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
