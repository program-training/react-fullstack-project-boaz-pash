import { useContext, useState } from "react";
import { TripContext } from "./contexts/tripContext";
import { Trip } from "./components/TripsDisplay/TripsDisplay";
 
export const useSynchronizeStateAndContext = () => {
  const [state, setState] = useState<Trip | null>(null);
  const context = useContext(TripContext);
  const getContext = (): void | null => {
    if (!context) return null;
    const { trip } = context;
    setState(trip);
  };
  return { state, getContext };
};
