import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import CenteredTabs from './CenteredTabs';
import Cards from './Cards/Cards';
import redFerrari from '../images/red-ferrari.jpg';
import bmw from '../images/bmw.jpg';
import yellowLambo from '../images/yellow-lambo.jpg';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from "../Context/AuthContext";
import Search from "../Search/Search";
import { db, fire } from '../FireBase/Fire';
import Footer from '../Footer/Footer';







const Main = () => {


    const search = {
        margin: "5px 0 0 4px"
    }
    const [sedan, setSedan] = useState([]);
    const [hatchback, setHatchBack] = useState([]);
    const [suv, setSuv] = useState([]);




    useEffect(() => {
        const unsub = db.collection("RentalCarAdd").where("Type", '==', "Sedan")
              .get()
              .then((querySnapshot) => {
                let documents = [];
                querySnapshot.forEach(doc => {
                  documents.push({...doc.data(), id: doc.id});
                });
                setSedan(documents);
              })
              .catch((error) => {
                  console.log("Error getting documents", error);
              });
    
    }, []);

    useEffect(() => {
        const unsub = db.collection("RentalCarAdd").where("Type", '==', "Hatchback")
              .get()
              .then((querySnapshot) => {
                let documents = [];
                querySnapshot.forEach(doc => {
                  documents.push({...doc.data(), id: doc.id});
                });
                setHatchBack(documents);
              })
              .catch((error) => {
                  console.log("Error getting documents", error);
              });
    
    }, []);
   
    useEffect(() => {
        const unsub = db.collection("RentalCarAdd").where("Type", '==', "SUV")
              .get()
              .then((querySnapshot) => {
                let documents = [];
                querySnapshot.forEach(doc => {
                  documents.push({...doc.data(), id: doc.id});
                });
                setSuv(documents);
              })
              .catch((error) => {
                  console.log("Error getting documents", error);
              });
    
    }, []);
   
   




const searchRef = useRef();
const history = useHistory();
const [state, setState] = useState("")


const descriptionBtn = {
    height: "40px",
    border: "none",
    borderRadius: "18px",
    height: "5vh",
    justifyContent: "right",
    padding: "5px",
    width: "auto"
}

const navbtn = {
    
    margin: "33px 0 0 900px"
}





const handleChange = (e) => {
    setState(searchRef.current.value);

}





return (
    <>
        <div className="bg" >
            <div className="search_bg img-fluid">
                <div className="container">
                    <div className="row">
                        <h1 style={{ color: "white", margin: "300px 0 -10px 450px" }}>HitchCar.</h1>
                        <input ref={searchRef} onChange={handleChange} type="text" className="search_bar form-control" placeholder="Search Here..." style={{ marginTop: "70px" }} />
                        <NavLink to={`/Search/${state}`}><span><button className=" search-btn" style={{ marginTop: "70px" }}><SearchIcon style={{ fontSize: "2.15rem" }} /></button></span></NavLink>
                    </div>
                    <div className="row">
                        <ul class="list-group ">
                            <CenteredTabs />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-xxl main-bg" style={{ margin: "0 70px 0 70px" }}>
                <div className="row" style={{ marginTop: "20px" }}>
                    <h2>Hatchbacks for Savers</h2><NavLink to="/DisplayMain/Hatchback" style={navbtn}><button className="btn btn-danger" style={descriptionBtn}>Discover More</button></NavLink>
                </div>

                <div style={{ marginTop: "10px", marginLeft: "5px" }} className="row" >
                    {hatchback.slice(0, 4).map((v) => {
                        return (

                            <Cards id={v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
                                AutoMaker={v.AutoMaker} Address={v.Address} Color={v.Color} Engine={v.Engine} InteriorColor={v.InteriorColor}
                                Phone={v.Phone} Transmission={v.Transmission} Type={v.Type} Provinve={v.Province} setSelectedCard={v.avatar}
                                UserName={v.UserName} Email={v.Email} />

                        )
                    })}

                </div>

                <div className="container-xxl banner-img1" style={{margin: "60px 0 60px 0"}}>
                    <div className="row" >
                        <h2 style={{color: "whitesmoke", marginTop: "60px"}}>Simple Ways to Get a Car</h2>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "20px" }}>
                    <h2>Sedans for Business</h2><NavLink to="/DisplayMain/Sedan" style={navbtn}><button className="btn btn-danger" style={descriptionBtn}>Discover More</button></NavLink>
                </div>

                <div style={{ marginTop: "30px" , marginLeft: "5px" }} className="row">
                    {sedan.slice(0, 4).map((v) => {
                        return (

                            <Cards id={v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
                                AutoMaker={v.AutoMaker} Address={v.Address} Color={v.Color} Engine={v.Engine} InteriorColor={v.InteriorColor}
                                Phone={v.Phone} Transmission={v.Transmission} Type={v.Type} Provinve={v.Province} setSelectedCard={v.avatar}
                                UserName={v.UserName} />

                        )
                    })}
                </div>

                <div className="container-xxl banner-img2" style={{margin: "60px 0 60px 0"}}>
                    <div className="row">
                        <h2 style={{color: "whitesmoke", marginTop: "60px"}}>Simple Ways to Get a Car</h2>
                        <p style={{color: "whitesmoke", margin: "20px 600px 0 37px ", fontSize: "1.3rem"}}>If you are here on business, you should consider renting one of these cars</p>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "20px" }}>
                    <h2>SUV for Executives</h2><NavLink to="/DisplayMain/SUV" style={navbtn}><button className="btn btn-danger" style={descriptionBtn}>Discover More</button></NavLink>
                </div>

                <div style={{ marginTop: "10px", marginLeft: "5px" }} className="row">
                    {suv.slice(0, 4).map((v) => {
                        return (

                            <Cards id={v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
                                AutoMaker={v.AutoMaker} Address={v.Address} Color={v.Color} Engine={v.Engine} InteriorColor={v.InteriorColor}
                                Phone={v.Phone} Transmission={v.Transmission} Type={v.Type} Provinve={v.Province} setSelectedCard={v.avatar}
                                UserName={v.UserName} />

                        )
                    })}
                </div>

            </div>
            <Footer />
        </div>
    </>
);
}

export default Main;