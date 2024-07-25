import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import AddCar from './AddCar';
import {db,fire} from '../FireBase/Fire';
import { useAuth } from "../Context/AuthContext"
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import MapStyles from './MapStyles';
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker
} from "@react-google-maps/api";
import Geocode from "react-geocode";



const mapContainerStyle = {
  width: "100%",
  height: "100vh"
};

const ShowPooled = () => {

  Geocode.setApiKey("");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();


  let [geoDeparture, setGeoDeparture] = useState();
 

  const [addState, setAddState] = useState(false);
  const { currentUser } = useAuth();
  const [center, setCenter] = React.useState({
    // lat: "32.00",
    // lng: "79.04",
  });

  const googleMapsApiKey = "AIzaSyD1QEf9w9as5fXiNiHhS9F98ASWF0698bQ";

  const getCurrentLocaion = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };


  useEffect(() => {
    getCurrentLocaion();
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  });
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null)


  useEffect(() => {
    const unsub = db.collection('PoolingAdd')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setData(documents);
      });
  }, []);
  // console.log(data);

  // useEffect(() => {
  //   {data && data.map((e)=>{
  //     return(
  //       setDeparture((current)=>[...current,e.Departure])
  //     )
  //   })}
  // }, [data]);


  // console.log(departure)

 






  const btnStyle = {
    position: "absolute",
    top: "35rem",
    left: "85rem",
    zIndex: "10",
    margin: "0",
    padding: "10px",
    borderRadius: "5px"
  }

  return (
    <>
     
      <div className="container-middle depth" style={{marginTop: "-80px"}}>
        <div>
        {!currentUser ?  "" : <button
            style={btnStyle}
            className="btn btn-lg btn-primary"
            onClick={() => setAddState(true)}>
            Add Your Car
          </button>

              }
          
        </div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          options={options}
        >
          {data.map((data) => (
          <Marker
            key={data.Email}
            position={{ lat: data.Departure[0].lat, lng: data.Departure[0].lng }}
            onClick={() => {
               setSelected(data);
            }}
            
            icon={{
            url: `/taxi1.svg`,
            scaledSize: new window.google.maps.Size(70, 70)
             }}
           />
        ))}
          {selected ? (
          <InfoWindow
            position={{ lat: selected.Departure[0].lat, lng: selected.Departure[0].lng }}
            onClick={
              Geocode.fromLatLng(selected.Destination[0].lat,selected.Destination[0].lng).then(
                (response) => {
                  const address = response.results[0].formatted_address;
                  setGeoDeparture(address);
                  // console.log(address);
                },
                (error) => {
                  console.error(error);
                }
              )
            }
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className="info-window">
              <DirectionsCarIcon/><span>Car Details</span>
              <p className="p-text">Model: <span> {selected.VehicleModel}</span></p>
              <p className="p-text">Make: <span>{selected.VehicleCompany}</span></p>
              <p className="p-text">Vehicle Number: <span>{selected.VehicleNumber}</span></p>
              <p className="p-text">Color: <span>{selected.VehicleColor}</span></p>
              <AccountCircleIcon/><span>User Details</span>
              <p className="p-text">Name: <span>{selected.Name}</span></p>
              <p className="p-text">Number: <span>{selected.Number}</span></p>
              <TripOriginIcon/><span>Trip Destination</span>
              <p className="p-text">{geoDeparture}</p>
            </div>
            
          </InfoWindow>
        ) : null}

          {addState && (
            <AddCar  addState={addState} setAddState={setAddState} />
          )}
          <Marker position={center}></Marker>

        </GoogleMap>
      </div>
    </>
  );
};

export default ShowPooled;
