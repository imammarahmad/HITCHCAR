import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import MapStyles from './MapStyles';
import "@reach/combobox/styles.css";
import './AddCar.css';

const libraries = ["places"];
const mapContainerStyle = {
  height: "20vh",
  width: "30vw",
  borderRadius: "15px"
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};


const SearchDestination = ({setDestination}) => {

  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:"AIzaSyD1QEf9w9as5fXiNiHhS9F98ASWF0698bQ",
    libraries,
  });

  React.useEffect(() => {
    getCurrentLocaion();
  }, []);

  const [center, setCenter] = React.useState({
    lat: "32.00",
    lng: "79.04",
  });

  const getCurrentLocaion = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  const [markers, setMarkers] = React.useState([]);

  const onMapClick = React.useCallback((event) =>  {
    setMarkers((current) => [...current, {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }])
    
  }, [])
  

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  },[]);

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(11);
  },[]); 


  return (
    <>
      <div>
      <SearchMap panTo={panTo} setDestination={setDestination}/>
        <GoogleMap mapContainerStyle={mapContainerStyle}
        zoom={15} 
        center={center}
        option={options}
        onClick={onMapClick}
        onLoad={onMapLoad}>
         <Marker position={center}></Marker>
        </GoogleMap>
        
      </div>
    </>
  );

  
  
}

// function Locate ({ panTo }) {
//   return (
//     <button onClick={() => {
//       navigator.geolocation.getCurrentPosition((position) => {
//       panTo({
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//       });
//     },
//     () => null,
//     );
//   }}>
      
//     </button>
//   )
// }

function SearchMap({panTo, setDestination}) {

  const inputDes = {
    width: "90%", 
    position: "relative", 
    left: "2.5%", 
    borderRadius: "2px", 
    border: "solid 1px black",
    marginBottom: "10px"
  }

  const {ready, 
    value, 
    suggestions: { status, data }, 
    setValue, 
    clearSuggestions,
    } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 32.00, lng: () => 79.04},
      radius: 10000*1000
    }
  })

  return ( <Combobox
    
    onSelect={async (address) => {
      setValue(address, false);
      clearSuggestions();
      try {

        const result = await getGeocode({address});
        const {lat, lng} = await getLatLng(result[0]);
        setDestination(() => [{lat: lat, lng: lng}])
        panTo({lat, lng});

      } catch(error){
        console.log(error);
      }
    }}
  >
    
    <ComboboxInput  value={value} onChange={(e) => {
      setValue(e.target.value);
    }}
      style={inputDes} 
      disabled={!ready}
      placeholder="Enter an address"
    />
    <ComboboxPopover>
      <ComboboxList>
      {status === "OK" && data.map(({id, description}) => (
        <ComboboxOption key={id} value={description} />
        
      ))}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>)

}



export default SearchDestination;
