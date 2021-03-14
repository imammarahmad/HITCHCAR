import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CarRental/Main.css';
import CenteredTabs from '../CarRental/CenteredTabs';
import Cards from '../CarRental/Cards/Cards';
import reactpic from '../images/react.jpeg';
import firebasepic from '../images/firebase.png';
import saaspic from '../images/bm3.png';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import { useAuth } from "../Context/AuthContext"
import { db } from '../FireBase/Fire';
import SideBar from './SideBar';



const Main = () => {
    

//     const [data, setData] = useState([]);
//     const [data1, setData1] = useState([]);

//     const { currentUser} = useAuth();

//     useEffect(() => {
//         const unsub = db.collection("RentalCarAdd").where("Email", '==', `${currentUser.email}` )
//           .get()
//           .then((querySnapshot) => {
//             let documents = [];
//             querySnapshot.forEach(doc => {
//               documents.push({...doc.data(), id: doc.id});
//             });
//             setData(documents);
//           })
//           .catch((error) => {
//               console.log("Error getting documents", error);
//           });
    
        
//       }, []);
//       useEffect(() => {
//         const unsub = db.collection("PendingBookings").where("Email", '==', `${currentUser.email}`)
//           .get()
//           .then((querySnapshot) => {
//             let documents = [];
//             querySnapshot.forEach(doc => {
//               documents.push({...doc.data(), id: doc.id});
//             });
//             setData1(documents);
//           })
//           .catch((error) => {
//               console.log("Error getting documents", error);
//           });
    
        
//       }, []);

//       console.log(data)

    

//     const search = {
//         margin: "5px 0 0 4px"
//     }
    

//     const banner = {
//         height: "50vh", 
//         width: "100%", 
//         margin: "20px 0 20px 0", 
//         borderRadius: "15px"
//     }
  
    return (
        <>
        <SideBar />
             {/* <div style={{backgroundColor: "cyan",
//             height: "6vh", width: "10%", margin: "20px 0 0 10px"}}>
//                 <span style={{fontSize:"1.5rem"}}><KeyboardBackspaceOutlinedIcon/></span></div>  */}
             {/* <div className="search_bg img-fluid">
//                 <div className="container">
//                     <div className="row">
//                         <h1 style={{color: "white", margin: "250px 0 0 350px"}}>Rental Cars in <span>Pakistan</span></h1>
//                     </div>
                    
//                 </div>
//             </div>
//             <div className="container-xxl" style={{margin: "0 70px 0 70px"}}>   
//                 <div className="row" style={{marginTop: "20px"}}>
//                     <h1>Ads Posted By you</h1><NavLink to="/CarDescription"></NavLink>
//                 </div>

//                 <div style={{marginTop: "10px"}} className="row">
//                 {data.map((v) => {
//                         return (
//                             <Cards id= {v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
//                             AutoMaker={v.AutoMaker} Address={v.Address} Color={v.Color} Engine={v.Engine} InteriorColor={v.InteriorColor}
//                             Phone={v.Phone} Transmission={v.Transmission} Type={v.Type} Provinve={v.Province} setSelectedCard={v.avatar}
//                             UserName={v.UserName} Email={v.Email} />
//                         )
//                     })}
                    
//                 </div>
                
                

               

                
                
//             </div>
//             <div className="container-xxl" style={{margin: "0 70px 0 70px"}}>   
//                 <div className="row" style={{marginTop: "20px"}}>
//                     <h1>Bookings Pending By you</h1><NavLink to="/CarDescription"></NavLink>
//                 </div>

//                 <div style={{marginTop: "10px"}} className="row">
//                 {data1.map((v) => {
//                         return (
//                             <Cards id= {v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
//                             AutoMaker={v.AutoMaker} Address={v.Address} Color={v.Color} Engine={v.Engine} InteriorColor={v.InteriorColor}
//                             Phone={v.Phone} Transmission={v.Transmission} Type={v.Type} Provinve={v.Province} setSelectedCard={v.avatar}
//                             UserName={v.UserName} Email={v.Email} />
//                         )
//                     })}
                    
//                 </div>
                
                

               

                
//                 </div> */}

            

            
        </>
    );
}

export default Main;

