import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TripsDisplay.css";
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
  const [trips, setTrips] = useState<Partial<Trip>[] | null>(null);
  useEffect(() => {
    const getTrips = async () => {
      const tripsArr = await axios("http://localhost:3000/api/trips");
      setTrips(tripsArr.data);
      console.log(trips);
    };
    getTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(trips);
  const handelOnClickTrip = (id: string | undefined) => {
    console.log("navigate");
    navigate(`/trips/${id}`);
  };
  return (
    <>
      <h1>OUR TRIPS</h1>
      <div id="trips-container">
        {trips
          ? trips.map((item) => (
              <div
                className="trip-card"
                onClick={() => {
                  handelOnClickTrip(item.id);
                }}
                key={item.id}
              >
                {item.name}
                <br /> {item.destination}
                <br /> start date: {item.startDate}
                <br /> end date: {item.endDate}
                <br />
                {<img style={{ maxWidth: "100%" }} src={item.image} />}
              </div>
            ))
          : null}
      </div>
    </>
  );
};
export default TripsDisplay;
