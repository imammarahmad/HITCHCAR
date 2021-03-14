import React, { useRef, useHistory, useState } from 'react';
import { motion } from 'framer-motion';
import './AddCar.css';
import { db, fire } from '../FireBase/Fire';
import Search from './Search';
import SearchDestination from './SearchDestination';
import CloseIcon from '@material-ui/icons/Close';
import { useAuth } from "../Context/AuthContext";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from 'use-places-autocomplete';

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { useLoadScript } from '@react-google-maps/api';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
            height: '6.3vh',
            opacity: '1'
        },
    },
}));

const Modal = (props) => {

    const [fileUrl, setFileUrl] = React.useState(null);
    const { currentUser } = useAuth();
    const [check, setCheck] = React.useState(false);
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [departure, setDeparture] = useState([]);
    const [destination, setDestination] = useState([]);
    const [vehicleModel, setVehicleModel] = useState();
    const [vehicleCompany, setVehicleCompany] = useState();
    const [vehicleNumber, setVehicleNumber] = useState();
    const [vehicleColor, setVehicleColor] = useState();


    const clearInput = (attributeRef) => {
        attributeRef.current.value = "";
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await db.collection("PoolingAdd").add({
                Name: name,
                Number: number,
                Departure: departure,
                Destination: destination,
                VehicleModel: vehicleModel,
                VehicleCompany: vehicleCompany,
                VehicleNumber: vehicleNumber,
                VehicleColor: vehicleColor,
                Email: currentUser.email,

            })
            alert("Data Entered")

        } catch {
            alert("error occured");
        }
        props.setAddState(false)

    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyD1QEf9w9as5fXiNiHhS9F98ASWF0698bQ",
    });
    const [selected, setSelected] = React.useState(null);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const classes = useStyles();

    const handleClick = (e) => {
        props.setAddState(false);
    }

    const closeBtn = {
        margin: "10px 0 -15px 30px",
        cursor: "pointer",
        fontSize: "1.5rem"
    }


    return (

        <>
            <motion.div className="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <CloseIcon style={closeBtn} onClick={handleClick} />
                <div className="container" >
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        {/* <Search /> */}
                        <div className="add-form">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4 style={{ margin: "20px 0 0 20px" }}>User Details</h4>
                                    <br />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Name"
                                        variant="outlined"
                                        onChange={(ev) => setName(ev.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Number"
                                        variant="outlined"
                                        onChange={(ev) => setNumber(ev.target.value)}
                                    />

                                    <h4 style={{ margin: "20px 0 0 20px" }}>Car Details</h4>
                                    <br />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Vehicle Model"
                                        variant="outlined"
                                        onChange={(ev) => setVehicleModel(ev.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Vehicle Company"
                                        variant="outlined"
                                        onChange={(ev) => setVehicleCompany(ev.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Vehicle Number"
                                        variant="outlined"
                                        onChange={(ev) => setVehicleNumber(ev.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Vehicle Color"
                                        variant="outlined"
                                        onChange={(ev) => setVehicleColor(ev.target.value)}
                                    />
                                </div>
                                <div className="col-sm-6">

                                    <h3 style={{ marginTop: "10" }}>Departure Address</h3>
                                    <br />
                                    <Search setDeparture={setDeparture} />
                                    {/* <h1>{departure}</h1> */}
                                    {console.log(departure)}
                                    <br />
                                    <h3 style={{ marginTop: "10" }}>Destination Address</h3>
                                    <br />
                                    <SearchDestination setDestination={setDestination} />
                                    {/* <h1>{departure}</h1> */}
                                    {console.log(destination)}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-small btn-primary submit-btn">
                            Submit
                    </button>
                    </form>
                    <div>
                    </div>
                    <div>
                        <NavLink to="/ShowPooled" ></NavLink>
                    </div>
                </div>

            </motion.div>
        </>
    )
}


export default Modal;


