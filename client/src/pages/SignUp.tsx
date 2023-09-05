import UserRegistration from "../components/UserRegistration/UserRegistration";

const SignUp: React.FC = () => {
  return (
    <div>
      <UserRegistration page="/register" buttonText="Sign Up" />
    </div>
  );
};
export default SignUp;
