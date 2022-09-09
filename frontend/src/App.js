import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";

import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { Register } from "./pages/Register";
import { SlotProvider } from "./Context/SlotsContexnt";
import Slots from './pages/Slots';
import AddSlots from "./pages/AddSlots";
import EmailVerify from "./components/EmailVerify";
import ForgotPassword from './components/ForgetPassword';
import PasswordReset from "./components/PasswordReset";
import Profile from "./pages/Profile";
import Layout from './components/Layout';
import AddSlotsBYDay from "./pages/AddSlotByDay";
import EditSlotByDay from "./pages/EditSlotByDay";
import EditSlotByDate from './pages/EditSlotByDate';
import Bookings from './pages/Bookings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forgetPassword" element={<ForgotPassword />} />
          <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
          <Route element ={<Layout/>}>
                <Route
                  path="/dashboard"
                  element={
                      <PrivateRoute>
                        <DashBoard />
                      </PrivateRoute>
                  }
                />
                <Route
                  path="/slot/edit-by-day/:id"
                  element={
                      <PrivateRoute>
                        <EditSlotByDay />
                      </PrivateRoute>
                  }
                />
                 <Route
                  path="/slot/edit-by-date/:id"
                  element={
                      <PrivateRoute>
                        <EditSlotByDate />
                      </PrivateRoute>
                  }
                />
                <Route
                  path="/slots"
                  element={
                      <SlotProvider>
                          <PrivateRoute>
                            <Slots />
                        </PrivateRoute>
                      </SlotProvider>   
                  }
                />
                <Route
                  path="/add-slots-date"
                  element={
                      <SlotProvider>
                          <PrivateRoute>
                            <AddSlots />
                        </PrivateRoute>
                      </SlotProvider>   
                  }
                />
                 <Route
                  path="/add-slots-day"
                  element={
                      <SlotProvider>
                          <PrivateRoute>
                            <AddSlotsBYDay/>
                        </PrivateRoute>
                      </SlotProvider>   
                  }
                />
               
                <Route
                 path="/profile" element={
                 <PrivateRoute>
                   <Profile />
                 </PrivateRoute>
                 } />

                <Route
                  path="/bookings" element={
                  <PrivateRoute>
                    <Bookings />
                  </PrivateRoute>
                 } />

              {/* <PrivateRoute path="/bookings" element={<Bookings />} /> */}
          </Route >
          
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
