import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Main from './Components/CarRental/Main';
// import Sidebar from './Components/Navbar/components/SideBar/Index';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/CarRental/Form/Form';
import Home from './Components/Home/Home';
import DisplayMain from './Components/CarRental/DisplayCars/DisplayMain';
import UserProfile from './Components/UserProfile/UserProfile';
import { AuthProvider } from "./Components/Context/AuthContext";
import Passwordreset from './Components/Passwordreset/Passwordreset';
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";
import Search from "./Components/Search/Search";
import ShowPooled from './Components/CarPooling/ShowPooled';
import CarDescription from './Components/CarRental/CarDescription';
import Footer from './Components/Footer/Footer';
import UserAds from './Components/UserProfile/UserAds';
import PendingBookings from './Components/UserProfile/PendingBookings';
import BookingDetails from './Components/UserProfile/BookingDetails';


const App = () => {

  // const [isOpen, setIsOpen] = React.useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }

  return (

    <>
    <Router>
    <AuthProvider>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar />

      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Passwordreset" component={Passwordreset} />
        <PrivateRoute path="/Form" component={Form} />
        <Route exact path="/DisplayMain/:sid" component={DisplayMain} />
        <Route exact path="/Search/:sid" component={Search} />
        <PrivateRoute exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/ShowPooled" component={ShowPooled} />
        <Route exact path="/CarDescription/:sid" component ={CarDescription}/>
        <PrivateRoute exact path="/UserAds" component ={UserAds}/>
        <PrivateRoute exact path="/BookingDetails/:sid" component ={BookingDetails}/>
        <PrivateRoute exact path="/PendingBookings" component ={PendingBookings}/>
      </Switch>

      
      </AuthProvider>
      </Router>
    </>

  );
}

export default App;