import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CarRental/Main.css';
import Cards from '../CarRental/Cards/Cards';
import BookingCard from './BookingCard';
import { NavLink } from 'react-router-dom';
import { db, fire } from '../FireBase/Fire';
import Footer from '../Footer/Footer';
import { useAuth } from "../Context/AuthContext"







const PendingBookings = (props) => {


    const [data, setData] = useState([]);
    const { currentUser} = useAuth();



    useEffect(() => {
        const unsub = db.collection("PendingBookings").where("Email", '==', `${currentUser.email}`)
            .get()
            .then((querySnapshot) => {
                let documents = [];
                querySnapshot.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setData(documents);
            })
            .catch((error) => {
                console.log("Error getting documents", error);
            });


    }, []);






    return (
        <>

            <div className="bg"  >
                <div className="search_bg img-fluid" style={{marginTop:"-480px"}}>
                    <div className="container">
                        <div className="row">
                            <h1 style={{ color: "white", margin: "480px 0 -10px 450px" }}>HitchCar.</h1>
                        </div>
                        <div className="row">
                            <ul class="list-group ">
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-xxl main-bg" style={{ margin: "0 70px 0 70px" }}>
                    <div className="row" style={{ marginTop: "20px" }}>
                        <h2 style={{textAlign:"center",width:"100%"}}>Bookings Pending By You </h2>

                    </div>
                    <div className="row" style={{ marginTop: "20px" }}>
                        {/* {data ? <h1>No cars found</h1>:""} */}

                    </div>

                    <div style={{ marginTop: "10px", marginLeft: "5px" }} className="row" >
                        {data.map((v) => {
                            return (

                                <BookingCard id={v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
                                    AutoMaker={v.AutoMaker} Address={v.Address} Color={v.Color} Engine={v.Engine} InteriorColor={v.InteriorColor}
                                    Phone={v.Phone} Transmission={v.Transmission} Type={v.Type} Provinve={v.Province} setSelectedCard={v.avatar}
                                    UserName={v.UserName} Email={v.Email} />

                            )
                        })}

                    </div>
                </div>
                <Footer />

            </div>











        </>
    );
}

export default PendingBookings;







