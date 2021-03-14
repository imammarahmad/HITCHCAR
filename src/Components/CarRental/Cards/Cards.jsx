import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Main.css';
import { db, fire } from '../../FireBase/Fire';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MoneyIcon from '@material-ui/icons/Money';
import {motion} from 'framer-motion';
import './Cards.css';
import { Link } from 'react-router-dom';


const Cards = (props) => {

    const [data, setData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    return (
    <>
        <div className="card-container" >
            <div className="image-container" >
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

export default Cards;