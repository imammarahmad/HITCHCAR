import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MoneyIcon from '@material-ui/icons/Money';
import { Link } from 'react-router-dom';


const DisplayCars = (props) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const styleList = {
        backgroundColor: "white",
        border: "solid 1px blue",
        borderRadius: "5px",
        height: "50vh",
        margin: "0 5px 0 5px",
        width: "18.2rem",

    };

    const cardText = {
        fontFamily: "sans-serif",
        fontWeight: "light",
        marginTop: "5px",
        fontSize: "1.1rem",
        backgroundColor: "aliceblue",
        width: "15rem"


    }
    const location = {
        margin: "0 40px 0 -30px",
        backgroundColor: "aliceblue",
        padding: "10px",
        borderRadius: "25px"

    }

    const price = {
        backgroundColor: "aliceblue",
        padding: "10px",
        borderRadius: "25px",

    }

    return (
        <>
            <div className="card-container-dc" >
                <div className="image-container-dc" >
                    <img src={props.avatar} alt="card pic" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>{props.AutoMaker}, {props.Model}</h3>
                    </div>
                    <div className="card-body">
                        <span className="float-left"><LocationOnIcon /> {props.City}</span>
                        <span className="float-right"><MoneyIcon /> {props.Price} Rs.</span>
                    </div>
                </div>
                <Link to={`/CarDescription/${props.id}`}>
                    <button className="btn btn--small btn-primary card-btn"> View More </button>
                </Link>
            </div>

        </>
    );

}

export default DisplayCars;