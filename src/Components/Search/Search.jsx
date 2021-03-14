import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CarRental/Main.css';
import Cards from '../CarRental/Cards/Cards';
import { NavLink } from 'react-router-dom';
import { db, fire } from '../FireBase/Fire';
import Footer from '../Footer/Footer';






const Search = (props) => {


    const [data, setData] = useState([]);
    // const { currentUser } = useAuth();



    useEffect(() => {
        const unsub = db.collection("RentalCarAdd").where("Model", '==', `${props.match.params.sid}`)
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

    console.log(data);





    return (
        <>

            <div className="bg" style={{marginTop: "-500px"}} >
                <div className="search_bg img-fluid">
                    <div className="container">
                        <div className="row">
                            <h1 style={{ color: "white", margin: "500px 0 -10px 450px" }}>HitchCar.</h1>
                        </div>
                        <div className="row">
                            <ul class="list-group ">
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-xxl main-bg" style={{ margin: "0 70px 0 70px" }}>
                    <div className="row" style={{ marginTop: "20px" }}>
                        <h2 style={{width: "100%", textAlign: "center"}} >Showing Search for {props.match.params.sid}</h2>

                    </div>
                    <div className="row" style={{ marginTop: "20px" }}>
                        {/* {data ? <h1>No cars found</h1>:""} */}

                    </div>

                    <div style={{ marginTop: "10px", marginLeft: "5px" }} className="row" >
                        {data.map((v) => {
                            return (

                                <Cards id={v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
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

export default Search;







