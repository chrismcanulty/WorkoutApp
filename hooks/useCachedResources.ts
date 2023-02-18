import { useEffect, useState } from 'react';
import { getData, storeData, containsKey } from '../storage';
import data from '../data.json';
import { getWorkouts, initWorkouts } from '../storage/workout';

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await initWorkouts();
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getWorkouts();
        console.log(workouts);
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
