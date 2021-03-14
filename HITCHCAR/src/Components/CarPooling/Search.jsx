import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
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


const Search = ({setDeparture}) => {

  
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
    mapRef.current.setZoom(14);
  },[]); 


  return (
    <>
      <div>
      <SearchMap panTo={panTo} setDeparture={setDeparture}/>
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

function SearchMap({panTo, setDeparture}) {

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
        setDeparture(() => [{lat: lat, lng: lng}])
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



export default Search;



// const [markers, setMarkers] = React.useState([]);
//   const [selected, setSelected] = React.useState(null);

//   const onMapClick = React.useCallback((e) => {
//     setMarkers((current) => [
//       ...current,
//       {
//         lat: e.latLng.lat(),
//         lng: e.latLng.lng(),
//         time: new Date(),
//       },
//     ]);
//   }, []);

//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(14);
//   }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return (
//     <div>
//       <h1>
//         Bears{" "}
//         <span role="img" aria-label="tent">
//           ⛺️
//         </span>
//       </h1>

//       <Locate panTo={panTo} />
//       <Search panTo={panTo} />

//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={8}
//         center={center}
//         options={options}
//         onClick={onMapClick}
//         onLoad={onMapLoad}
//       >
//         {markers.map((marker) => (
//           <Marker
//             key={`${marker.lat}-${marker.lng}`}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             onClick={() => {
//               setSelected(marker);
//             }}
//             // icon={{
//             //   url: `/bear.svg`,
//             //   origin: new window.google.maps.Point(0, 0),
//             //   anchor: new window.google.maps.Point(15, 15),
//             //   scaledSize: new window.google.maps.Size(30, 30),
//             // }}
//           />
//         ))}

//         {selected ? (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => {
//               setSelected(null);
//             }}
//           >
//             <div>
//               <h2>
//                 <span role="img" aria-label="bear">
//                   🐻
//                 </span>{" "}
//                 Alert
//               </h2>
//               <p>Spotted {formatRelative(selected.time, new Date())}</p>
//             </div>
//           </InfoWindow>
//         ) : null}
//       </GoogleMap>
//     </div>
//   );
// }

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }

// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );