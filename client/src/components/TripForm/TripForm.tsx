import Input from "../Input/Input";
import { useEffect, useState } from "react";
import { Trip } from "../TripsDisplay/TripsDisplay";
import axios from "axios";
// import { defineConfig } from 'vite';
type Props = {
  trip: Trip | null;
  method: "post" | "put";
  url: string;
};
const TripForm: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState<Trip | null>(null);
  useEffect(() => {
    const getContext = () => {
      setFormData(props.trip);
    };
    getContext;
  }, [props.trip]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) =>
      prevData ? { ...prevData, [name]: value } : props.trip
    );
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: `${props.method}`,
        url: `http://localhost:3000/api${props.url}`,
        data: formData,
        headers: { "authorization ": "test-token" },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="Name"
          onChange={handleChange}
          value={formData?.name}
          disabled={false}
          placeholder={props.trip ? props.trip.name : "name"}
          label=""
          error={false}
        />
        <Input
          type="text"
          name="destination"
          onChange={handleChange}
          value={formData?.destination}
          disabled={false}
          placeholder={props.trip ? props.trip.destination : "destination"}
          label=""
          error={false}
        />
        <Input
          type="text"
          name="startDate"
          onChange={handleChange}
          value={formData?.startDate}
          disabled={false}
          placeholder={props.trip ? props.trip.startDate : "startDate"}
          label=""
          error={false}
        />
        <Input
          type="text"
          name="endDate"
          onChange={handleChange}
          value={formData?.endDate}
          disabled={false}
          placeholder={props.trip ? props.trip.endDate : "endDate"}
          label=""
          error={false}
        />
        <Input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData?.description}
          disabled={false}
          placeholder={props.trip ? props.trip.description : "description"}
          label=""
          error={false}
        />
        <Input
          type="text"
          name="price"
          onChange={handleChange}
          value={formData?.price}
          disabled={false}
          placeholder={props.trip ? props.trip.price.toString() : "price"}
          label=""
          error={false}
        />
        <Input
          type="text"
          name="image"
          onChange={handleChange}
          value={formData?.image}
          disabled={false}
          placeholder={props.trip ? props.trip.image : "image url"}
          label=""
          error={false}
        />
        <Input
          type="text"
          name="activities"
          onChange={handleChange}
          value={formData?.activities[0]}
          disabled={false}
          placeholder="activities"
          label=""
          error={false}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default TripForm;
