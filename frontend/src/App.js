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
                  path="/add-slots"
                  element={
                      <SlotProvider>
                          <PrivateRoute>
                            <AddSlots />
                        </PrivateRoute>
                      </SlotProvider>   
                  }
                />
             
              <Route path="/profile" element={<Profile />} />
          </Route >
          
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
