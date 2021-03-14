import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CategoryIcon from '@material-ui/icons/Category';
import MoneyIcon from '@material-ui/icons/Money';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PaletteIcon from '@material-ui/icons/Palette';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SettingsIcon from '@material-ui/icons/Settings';
import { NavLink, useHistory } from 'react-router-dom';
import { db } from '../FireBase/Fire';
import { useAuth } from "../Context/AuthContext";
import './CarDescription.css';
import Grid from '@material-ui/core/Grid';
import DateMomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Footer from '../Footer/Footer';




const CarDescription = (props) => {
    // console.log(currentUser);
    
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
    const [startDate,setStartDate]=React.useState(new Date().toDateString());
    const [startTime,setStartTime]=React.useState(new Date().toTimeString());
    const [endDate,setEndDate]=React.useState(new Date().toDateString());
    const [endTime,setEndTime]=React.useState(new Date().toTimeString());




    const handleStartDateChange = (date) => {
        setSelectedDate(date);
        setStartDate(date._d.toDateString());
        setStartTime(date._d.toTimeString());
    
    };
    
    const handleEndDateChange = (date) => {
        
        setSelectedEndDate(date);;
        setEndDate(date._d.toDateString());
        setEndTime(date._d.toTimeString());
    
    
        
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
            await db.collection("RentalCarAdd").where("id", '==', `${props.match.params.sid}`)
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

    useEffect(() => {
        {
            data && data.map((car) => {
                return (
                    setAutoMaker(car.AutoMaker),
                    setCity(car.City),
                    setColor(car.Color),
                    setEngine(car.Engine),
                    setInteriorColor(car.InteriorColor),
                    setModel(car.Model),
                    setPrice(car.Price),
                    setProvince(car.Province),
                    setSellerEmail(car.Email),
                    setYear(car.Year),
                    setTransmission(car.Transmission),
                    setType(car.Type),
                    setPhone(car.Phone),
                    setAddress(car.Address),
                    setAvatar(car.avatar)
                );
            })
        }

        if (currentUser) {
            setBuyerEmail(currentUser.email);
            setBuyerName(currentUser.displayName);
        }

    }, [data])

    

    const handleBook = async (e) => {
        e.preventDefault();
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        

        try {

            // alert("here");

            await db.collection("PendingBookings").doc(key).set({
                AutoMaker: autoMaker,
                Model: `${model}`,
                Year: `${year}`,
                Type: `${type}`,
                Color: `${color}`,
                Transmission: `${transmission}`,
                Engine: `${engine}`,
                InteriorColor: `${interiorColor}`,
                Address: `${address}`,
                City: `${city}`,
                Province: `${province}`,
                Price: `${price}`,
                Email: `${sellerEmail}`,
                avatar: `${avatar}`,
                BuyerName: `${buyerName}`,
                Phone: `${phone}`,
                BuyerEmail: `${buyerEmail}`,
                StartDate: startDate,
                StartTime: startTime,
                EndDate: endDate,
                EndTime: endTime,
                id:key


            })
            alert("Request Sent to user");
            history.push('/Main');

        } catch {
            alert("error occured");
        }
    }
   


    return (
        <>
            {data && data.map((car) => {
                return (
                    <>
                        <div className="bg-description">
                            <div className="container-xxl main-bg-description">
                                <div>
                                    <h2 className="h2-details">Car Description</h2>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="img-container" >
                                            <img src={car.avatar} className="image-description-img" alt="Car Pic" />
                                        </div>
                                        <div style={{width: "100%", margin: "30px 0 0 30px"}}>
                                            <span className="span-details"><MoneyIcon /><h5>{car.Price}<span> Rs. /Day</span></h5></span><br />
                                            <span>Note: This car should be checked before taking it for rent and examined in day light.</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6" style={{ marginTop: "20px" }}>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3>Start Date, Time</h3>
                                                <div>
                                                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                                        <Grid container justify="space-around">
                                                            <KeyboardDatePicker
                                                                disableToolbar
                                                                variant="inline"
                                                                format="MM/dd/yyyy"
                                                                margin="normal"
                                                                id="date-picker-inline"
                                                                label="Date picker inline"
                                                                value={selectedDate}
                                                                onChange={handleStartDateChange}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change date'
                                                                }}
                                                            />
                                                            <KeyboardTimePicker
                                                                margin="normal"
                                                                id="time-picker"
                                                                label="Time picker"
                                                                value={selectedDate}
                                                                onChange={handleStartDateChange}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change time',
                                                                }}
                                                            />

                                                        </Grid>
                                                    </MuiPickersUtilsProvider>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3>End Date, Time</h3>
                                                <div>
                                                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                                        <Grid container justify="space-around">
                                                            <KeyboardDatePicker
                                                                disableToolbar
                                                                variant="inline"
                                                                format="MM/dd/yyyy"
                                                                margin="normal"
                                                                id="date-picker-inline"
                                                                label="Date picker inline"
                                                                value={selectedEndDate}
                                                                onChange={handleEndDateChange}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change date'
                                                                }}
                                                            />
                                                            <KeyboardTimePicker
                                                                margin="normal"
                                                                id="time-picker"
                                                                label="Time picker"
                                                                value={selectedEndDate}
                                                                onChange={handleEndDateChange}
                                                                KeyboardButtonProps={{
                                                                    'aria-label': 'change time',
                                                                }}
                                                            />
                                                        </Grid>
                                                    </MuiPickersUtilsProvider>
                                                </div>
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
                                            <h3 className="h3-user-details">User Details</h3>
                                            <div style={{width: "100%", margin: "20px 0 0 60px"}}>
                                                <span className="span-details"><AccountCircleIcon /><h5>{car.UserName}</h5></span>
                                                <span className="span-details"><ContactPhoneIcon />
                                                {!currentUser ? <h5>*******</h5>  : <h5>{car.Phone}</h5>}
                                                </span>
                                                <span className="span-details"><LocationCityIcon /><h5>{car.City}, {car.Province}</h5></span>
                                            </div>
                                            <span>
                                                {!currentUser ? <h6>Signin to view the number</h6> : "" }
                                                </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                {!currentUser ? <NavLink to="/Signin"><button className="btn btn-small btn-primary book-btn">Sign In To Book This Car</button></NavLink>
                                :
                                <button onClick={handleBook} className="btn btn-small btn-primary book-btn">Book This Car</button>}
                                    
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