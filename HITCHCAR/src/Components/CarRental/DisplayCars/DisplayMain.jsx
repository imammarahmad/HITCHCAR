import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Main.css';
import { db, fire } from '../../FireBase/Fire';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MoneyIcon from '@material-ui/icons/Money';
import { motion } from 'framer-motion';
import DisplayCards from './DisplayCards';
import Footer from '../../Footer/Footer';
import './DisplayCards.css';



const FetchCars = (props, { setSelectedCard }) => {

    const [data, setData] = useState([]);



    // const styleList = {
    //     backgroundColor: "white",
    //     border: "solid 1px blue",
    //     borderRadius: "5px",
    //     height: "50vh",
    //     margin: "0 5px 0 5px",
    //     width: "18.2rem",

    // };

    // const cardText = {
    //     fontFamily: "sans-serif",
    //     fontWeight: "light",
    //     marginTop: "5px",
    //     fontSize: "1.1rem",
    //     backgroundColor: "aliceblue",
    //     width: "15rem"


    // }
    // const location = {
    //     margin: "0 40px 0 -30px",
    //     backgroundColor: "aliceblue",
    //     padding: "10px",
    //     borderRadius: "25px"

    // }

    // const price = {
    //     backgroundColor: "aliceblue",
    //     padding: "10px",
    //     borderRadius: "25px",

    // }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const usersCollection = await db.collection("RentalCarAdd").get();
    //         setData(
    //             usersCollection.docs.map((doc) => {
    //                 return doc.data();
    //             })
    //         );
    //     };
    //     fetchData();
    // }, []);



    useEffect(() => {
        const unsub = db.collection("RentalCarAdd").where("Type", '==', `${props.match.params.sid}`)
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
            <div className="bg-display">
                <div className="container-xxl main-bg-display">
                    <div className="row h2-display" >
                        <h2 className="h2-display">Showing All {props.match.params.sid}'s</h2>
                    </div>
                    <div style={{ margin:"30px 0 0 5px" }} className="row" >
                        {data.map((v) => {
                            return (
                                <DisplayCards id={v.id} avatar={v.avatar} Year={v.Year} City={v.City} Price={v.Price} Model={v.Model}
                                    AutoMaker={v.AutoMaker} setSelectedCard={v.avatar} />
                            )
                        })}
                    </div>
                </div>
                <Footer />
        </div>
        </>
    );



}

export default FetchCars;