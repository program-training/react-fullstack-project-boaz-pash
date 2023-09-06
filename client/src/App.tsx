import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TripsDisplay from "./components/TripsDisplay/TripsDisplay";
import TripDetails from "./components/TripDetail/TripDetails";
import UpdateTripForm from "./components/UpdateTripForm/UpdateTripForm";
import TripForm from "./components/TripForm/TripForm";
import TripContextProvider from "./contexts/tripContext";

function App() {
  return (
    <TripContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="trips" element={<TripsDisplay />} />
            <Route path="trips/:id" element={<TripDetails />} />
            <Route path="trips/:id/edit" element={<UpdateTripForm />} />
            <Route path="add"element={<TripForm trip={null} method="post" url="/trips" />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </TripContextProvider>
  );
}

export default App;
