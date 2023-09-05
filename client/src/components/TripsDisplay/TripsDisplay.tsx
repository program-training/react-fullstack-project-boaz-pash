import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TripContext } from "../../contexts/tripContext";
import { useNavigate } from "react-router-dom";

export type Trip = {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
};

const TripsDisplay: React.FC = () => {
  const navigate = useNavigate();
  const tripContext = useContext(TripContext);
  const [trips, setTrips] = useState<Partial<Trip>[] | null>(null);
  useEffect(() => {
    const getTrips = async () => {
      const tripsArr = await axios("http://localhost:3000/api/trips");
      setTrips(tripsArr.data);
      console.log(trips);
    };
    getTrips();
    console.log(trips);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handelOnClickTrip = (id: string | undefined) => {
    if (!tripContext) return null;
    const { setId } = tripContext;
    setId(id);
    navigate("/trip/:id");
  };
  return (
    <div id="trips-container">
      <h1>OUR TRIPS</h1>
      {trips
        ? trips.map((item) => (
            <div
              onClick={(e) => {
                e.preventDefault();
                handelOnClickTrip(item.id);
              }}
              key={item.id}
            >
              {`${item.name}  ${item.destination}  start date: ${
                item.startDate
              } end date: ${item.endDate} ${item.destination}  price: ${
                item.destination
              }  ${(
                <img src={item.image} />
              )}activities:   /*( <ul>    {item.activities.map((e) => (      <li>{e}</li>    ))}     </ul>   )*/`}
            </div>
          ))
        : null}
    </div>
  );
};
export default TripsDisplay;
