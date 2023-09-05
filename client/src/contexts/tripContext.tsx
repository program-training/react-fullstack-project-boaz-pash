import { createContext, useState } from "react";
import { Trip } from "../components/TripsDisplay/TripsDisplay";
interface TripContextData {
  trip: Trip | null;
  id: string | undefined;
  setId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setTrip: React.Dispatch<React.SetStateAction<Trip | null>>;
}
interface TripContextProviderProps {
  children: React.ReactNode;
}
export const TripContext = createContext<TripContextData | null>(null);

const TripContextProvider: React.FC<TripContextProviderProps> = (props) => {
  const [id, setId] = useState<string | undefined>(undefined);
  const [trip, setTrip] = useState<Trip | null>(null);
  return (
    <>
      <TripContext.Provider value={{ id, setId, trip, setTrip }}>
        {props.children}
      </TripContext.Provider>
    </>
  );
};
export default TripContextProvider;
