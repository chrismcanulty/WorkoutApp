import { useEffect, useState } from 'react';
import { getData, storeData, containsKey } from '../storage';
import data from '../data.json';

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const hasWorkouts = await containsKey('workout-data');
        if (!hasWorkouts) {
          console.log('storing data');
          await storeData('workout-data', data);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getData('workout-data');
        console.log(workouts);
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
