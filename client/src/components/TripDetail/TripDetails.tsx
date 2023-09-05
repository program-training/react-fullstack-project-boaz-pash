import axios from "axios";
import { Trip } from "../TripsDisplay/TripsDisplay";
type Props = {
  id: string;
};
const TripDetails: React.FC<Props> = (props) => {
  
  const getSpecificTrip = async () => {
    const trip: Trip = (
      await axios(`http://localhost:3000/api/trips/${props.id}`)
    ).data;
   
  };

  return <></>;
};

export default TripDetails;
