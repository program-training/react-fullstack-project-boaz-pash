import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Trip } from "../TripsDisplay/TripsDisplay";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { FiEdit2 } from "react-icons/Fi";
import { BiMessageAltAdd } from "react-icons/Bi";
import { TripContext } from "../../contexts/tripContext";
import "../TripsDisplay/TripsDisplay.css";

const TripDetails: React.FC = () => {
  const [thisTrip, setThisTrip] = useState<Trip | null>(null);
  const tripContext = useContext(TripContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  useEffect(() => {
    let temp: Trip;
    const getSpecificTrip = async () => {
      temp = (await axios(`http://localhost:3000/api${location.pathname}`))
        .data;
      setThisTrip(temp);
    };
    const handelContext = () => {};
    getSpecificTrip();
    handelContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteTrip = async () => {
    const config = {
      headers: { "authorization ": "test-token" },
    };
    const del = await axios.delete(
      `http://localhost:3000/api${location.pathname}`,
      config
    );
    console.log(del.status);
  };

  const handelEditButton = () => {
    if (!tripContext) return null;
    const { trip, setTrip } = tripContext;
    setTrip(thisTrip);
    console.log(tripContext);
    thisTrip && navigate(`/trips/${trip?.id}/edit`);
  };

  return (
    <>
      <nav>
        <Link to="/trips">To all our trips</Link>
      </nav>
      <Outlet />
      <div id="trips-container-id">
        {thisTrip ? (
          <div className="trip-card-id">
            {thisTrip.name} {thisTrip.destination}
            <br />
            date: {thisTrip.startDate}-{thisTrip.endDate} <br />{" "}
            {thisTrip.description} <br /> price: {thisTrip.price}$
            {<img style={{ maxWidth: "100%" }} src={thisTrip.image} />}
            <div className="functions-buttons-container">
              <RiDeleteBin6Line onClick={deleteTrip} />
              <FiEdit2 onClick={handelEditButton} />
              <Link to={"/add"}>
                <BiMessageAltAdd />
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TripDetails;
