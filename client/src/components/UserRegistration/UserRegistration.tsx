import axios from "axios";
import { useState } from "react";
import Input from "../Input/Input";

export interface SignUpFormState {
  email: string;
  password: string;
}
type Props = {
  page: string;
  buttonText: string;
};
const UserRegistration: React.FC<Props> = (props) => {
  const [formData, setFormData] = useState<SignUpFormState>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const config = {
    headers: { "authorization ": "authToken" },
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/auth/${props.page}`,
        formData,
        config
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={false}
          placeholder="Email"
          label=""
          error={false}
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={false}
          placeholder="password"
          label=""
          error={false}
        />
        <button>{props.buttonText}</button>
      </form>
    </div>
  );
};
export default UserRegistration;
