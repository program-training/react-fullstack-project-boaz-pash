import { TripContext } from "../../contexts/tripContext";
import { useContext, useEffect, useState } from "react";
import TripForm from "../TripForm/TripForm";
import { Trip } from "../TripsDisplay/TripsDisplay";

const UpdateTripForm: React.FC = () => {
  const tripContext = useContext(TripContext);
  const [thisTrip, setThisTrip] = useState<Trip | null>(null);
  useEffect(() => {
    const getTripData = () => {
      if (!tripContext) return null;
      const { trip } = tripContext;
      setThisTrip(trip);
    };
    getTripData();
  }, []);
  console.log(thisTrip);

  return (
    <div>
      {" "}
      {thisTrip ? (
        <TripForm trip={thisTrip} method="put" url={`/trips/${thisTrip.id}`} />
      ) : (
        <TripForm trip={thisTrip} method="put" url={``} />
      )}
    </div>
  );
};
export default UpdateTripForm;
