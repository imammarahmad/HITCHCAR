import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CarRental/Main.css';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CategoryIcon from '@material-ui/icons/Category';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PaletteIcon from '@material-ui/icons/Palette';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SettingsIcon from '@material-ui/icons/Settings';
import { NavLink, useHistory } from 'react-router-dom';
import { db } from '../FireBase/Fire';
import { useAuth } from "../Context/AuthContext";
import './BookingDetails.css';
import Grid from '@material-ui/core/Grid';
import DateMomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Footer from '../Footer/Footer';




const CarDescription = (props) => {
    
    const { currentUser } = useAuth();
    const [data, setData] = useState([]);
    const [autoMaker, setAutoMaker] = useState('');
    const [model, setModel] = useState();
    const [type, setType] = useState();
    const [year, setYear] = useState();
    const [color, setColor] = useState();
    const [transmission, setTransmission] = useState();
    const [engine, setEngine] = useState();
    const [interiorColor, setInteriorColor] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [province, setProvince] = useState();
    const [price, setPrice] = useState();
    const [sellerEmail, setSellerEmail] = useState();
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerName, setBuyerName] = useState();
    const [phone, setPhone] = useState();
    const [avatar, setAvatar] = useState();



    const goback = useHistory(useHistory);
    const main = () => {
        goback.goBack();
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const[startDate,setStartDate]=React.useState(new Date().toDateString());
    const[startTime,setStartTime]=React.useState(new Date().toTimeString());
    const[endDate,setEndDate]=React.useState(new Date().toDateString());
    const[endTime,setEndTime]=React.useState(new Date().toTimeString());




    const handleStartDateChange = (date) => {
        setSelectedDate(date);
        
    
    };
    
    const handleEndDateChange = (date) => {
        
        setSelectedEndDate(date);;
    
    
        
    };
    

    const styleList = {
        backgroundColor: "white",
        border: "solid 1px aliceblue",
        borderRadius: "5px",
        height: "63vh",
        margin: "0 5px 0 5px",
        width: "auto",
        marginTop: "30px"

    };

    const descriptionStyle = {
        margin: "35px 0 0 0",
        backgroundColor: "aliceblue",
        border: "solid 2px red",
        borderRadius: "5px",
        padding: "10px",
        width: "100%"

    };

    const userIcon = {
        fontSize: "10rem",
        margin: "0 0 5px 0px",
        width: "100%"


    }
    const arrow = {
        fontSize: "3rem",
        backgroundColor: "aliceblue",
        border: "solid 2px red",
        borderRadius: "25px",
        width: "50px",
        margin: "30px 0 0 25px",

    }
    const history = useHistory();

    useEffect(() => {
        const dataFetch = async () => {
            await db.collection("PendingBookings").where("id", '==', `${props.match.params.sid}`)
                .get()
                .then((querySnapshot) => {
                    let documents = [];
                    querySnapshot.forEach(doc => {
                        documents.push({ ...doc.data(), id: doc.id });
                    });
                    setData(documents);
                }
                )
                .catch((error) => {
                    console.log("Error getting documents", error);
                });
        }
        dataFetch();

    }, []);
    

    return (
        <>
            {data && data.map((car) => {
                return (
                    <>
                        <div className="bg-description">
                            <div className="container-xxl main-bg-description">
                                <div>
                                    <h2 className="h2-details">Booking Details</h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="img-container" >
                                            <img src={car.avatar} className="image-description-img" alt="Car Pic" />
                                        </div>
                                        <div style={{width: "100%", margin: "30px 0 0 30px"}}>
                                            <span className="span-details"><AttachMoneyIcon /><h5>{car.Price}<span> Rs.</span></h5></span><br />
                                            
                                        </div>
                                    </div>
                                    <div className="col-sm-6" style={{ marginTop: "20px" }}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3>Start Date, Time<br/></h3>
                                                <h4 style={{width: "100%", textAlign: "center"}} >{car.StartDate}<br/>{car.StartTime.slice(0,5)}</h4>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3>End Date, Time</h3>
                                                <h4 style={{width: "100%", textAlign: "center"}}>{car.EndDate}<br/>{car.EndTime.slice(0,5)}</h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <h3 className="h3-car-details">Specifications</h3>
                                            <div style={{width: "100%", margin: "20px 0 0 60px"}}>
                                                <span className="span-details"><EmojiTransportationIcon /><h5>{car.AutoMaker}</h5></span>
                                                <span className="span-details"><DirectionsCarIcon /><h5>{car.Model}</h5></span>
                                                <span className="span-details"><CalendarTodayIcon /><h5>{car.Year}</h5></span>
                                                <span className="span-details"><ColorLensIcon /><h5>{car.Color}</h5></span>
                                                <span className="span-details"><AccountTreeIcon /><h5>{car.Transmission}</h5></span>
                                                <span className="span-details"><SettingsIcon /><h5>{car.Engine}</h5></span>
                                                <span className="span-details"><PaletteIcon /><h5>{car.InteriorColor}</h5></span>
                                                <span className="span-details"><CategoryIcon /><h5>{car.Type}</h5></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <h3 className="h3-user-details">Rental Details</h3>
                                            <div style={{width: "100%", margin: "20px 0 0 60px"}}>
                                                <span className="span-details"><AccountCircleIcon /><h5>{car.BuyerName}</h5></span>
                                                <span className="span-details"><ContactPhoneIcon />
                                                 <h5>{car.BuyerEmail}</h5>
                                                </span>
                        
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div>
                               
                                </div>
                            </div>
                            <Footer />
                        </div>
                        
                        
                       
                    </>
                )
            })}
        </>
    );
}

export default CarDescription;