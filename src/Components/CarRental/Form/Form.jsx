import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db, fire } from '../../FireBase/Fire';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";
import Footer from '../../Footer/Footer';
import { motion } from 'framer-motion';
// import ProgressBar from './ProgressBar';
import '../Main.css';



const Form = () => {


    const [fileUrl, setFileUrl] = React.useState(null);
    const [check, setCheck] = React.useState(false);
    const { currentUser } = useAuth();
    const [data, setData] = useState();
    const [progress, setProgress] = useState(0);
    const [percentage,setPercentage]=useState(0);

    const autoMakerRef = useRef();
    const modelRef = useRef();
    const typeRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();
    const transmissionRef = useRef();
    const engineRef = useRef();
    const interiorColorRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const provinceRef = useRef();
    const priceRef = useRef();

    const clearInput = (attributeRef) => {
        attributeRef.current.value = "";
    }


    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = fire.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
        setPercentage(100);
    };

    const goBack = useHistory(useHistory);
    const main = () => {
        goBack.goBack();
    }
    useEffect(() => {
        const unsub = db.collection("Users").where("Email", '==', `${currentUser.email}`)
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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    
        const automaker = autoMakerRef.current.value;
        const type = typeRef.current.value;
        const year = yearRef.current.value;
        const model = modelRef.current.value;
        const color = colorRef.current.value;
        const transmission = transmissionRef.current.value;
        const engine = engineRef.current.value;
        const interiorColor = interiorColorRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;
        const province = provinceRef.current.value;
        const price = priceRef.current.value;

        // if (check) {


        try {
            
            await db.collection("RentalCarAdd").doc(key).set({
                AutoMaker: automaker,
                Model: model,
                Year: year,
                Type: type,
                Color: color,
                Transmission: transmission,
                Engine: engine,
                InteriorColor: interiorColor,
                Address: address,
                City: city,
                Province: province,
                Price: price,
                Email: currentUser.email,
                avatar: fileUrl,
                UserName: data[0].FirstName,
                Phone: data[0].Phone,
                id: key,
                status: "1"



            })
            clearInput(autoMakerRef);
            clearInput(typeRef);
            clearInput(modelRef);
            clearInput(transmissionRef);
            clearInput(yearRef);
            clearInput(colorRef);
            clearInput(engineRef);
            clearInput(interiorColorRef);
            clearInput(addressRef);
            clearInput(cityRef);
            clearInput(provinceRef);
            clearInput(priceRef);
            alert("Form has been submitted");
            main();
            setCheck(false);


        } catch {
            alert("error occured");
        }

    }

    // }

    const styleBg = {
        marginTop: "-470px",
        backgroundPosition: "top"
    }
    const styleMainHeading = {
        width: "100%",
        textAlign: "center",
        color: "white",
        marginTop: "500px"
    }
    const mainBg = {
        width: "80%",
        position: "relative",
        left: "10%",
        marginTop: "20px",
        marginBottom: "50px"
    }
    const h3Heading = {
        width: "100%",
        position: "relative",
        left: "1",
        marginTop: "10px"
    }

    const labelForm = {
        margin: "30px"
    }

    const styleBtn = {
        width: "90%",
        position: "relative",
        left: "5%",
        marginBottom: "10px",
        height: "5vh",
        padding: "3px"
    }
    return (
        <>
            <div className="container-xxl">
                <div className="search_bg" style={styleBg}>
                    <div className="container">
                        <div className="row">
                            <h2 style={styleMainHeading}>Add your Car for Rent</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl bg" style={{ width: "100%", marginTop: "0px", position: "absolute", height: "auto" }}>
                <div className="main-bg" style={mainBg}>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="row" >
                            <h3 style={h3Heading}>Add Car Details</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div style={labelForm}>
                                    <label>AutoMaker</label>
                                    <input required type="text" className="form-control" ref={autoMakerRef} placeholder="e.g Toyota" />
                                </div>
                                <div style={labelForm}>
                                    <label>Year</label>
                                    <input required type="number" className="form-control" ref={yearRef} placeholder="e.g 2020" min="1970" />
                                </div>
                                <div style={labelForm}>
                                    <label>Type</label>
                                    <select className="form-control" ref={typeRef}>
                                        <option>Sedan</option>
                                        <option>Hatchback</option>
                                        <option>Crossover</option>
                                        <option>SUV</option>
                                        <option>Bike</option>
                                    </select>
                                </div>
                                <div style={labelForm}>
                                    <label>Interior Color</label>
                                    <select className="form-control" ref={interiorColorRef}>
                                        <option>Black</option>
                                        <option>Beige</option>
                                        <option>Dual-Tone</option>
                                    </select>
                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div style={labelForm}>
                                    <label>Model</label>
                                    <input required type="text" className="form-control" ref={modelRef} placeholder="e.g Corolla" />
                                </div>
                                <div style={labelForm}>
                                    <label>Transmission</label>
                                    <select className="form-control" ref={transmissionRef}>
                                        <option>Automatic</option>
                                        <option>Manual</option>
                                    </select>
                                </div>
                                <div style={labelForm}>
                                    <label>Color</label>
                                    <input required type="text" className="form-control" placeholder="e.g White" ref={colorRef} />
                                </div>
                                <div style={labelForm}>
                                    <label>Engine</label>
                                    <select className="form-control" ref={engineRef}>
                                        <option>660cc</option>
                                        <option>1000cc</option>
                                        <option>1300cc</option>
                                        <option>1400cc</option>
                                        <option>1600cc</option>
                                        <option>1800cc</option>
                                        <option>2000cc</option>
                                        <option>2400cc</option>
                                        <option>2700cc</option>
                                        <option>3000cc</option>
                                        <option>3500cc</option>
                                        <option>4500cc</option>
                                        <option>5700cc</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h3 style={h3Heading}>User Address Details</h3>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div style={labelForm}>
                                    <label for="inputAddress">Address</label>
                                    <input required type="text" className="form-control" id="inputAddress" placeholder="e.g 1234 Main St" ref={addressRef} />
                                </div>
                                <div style={labelForm}>
                                    <label>Province</label>
                                    <select className="form-control" ref={provinceRef}>
                                        <option>Punjab</option>
                                        <option>Sindh</option>
                                        <option>KPK</option>
                                        <option>Balouchistan</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div style={labelForm}>
                                    <label for="inputCity">City</label>
                                    <input required type="text" class="form-control" id="inputCity" ref={cityRef} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h3 style={h3Heading}>Price and Picture</h3>
                        </div>
                        <div className="row" style={{width: "100%"}}>
                            {/* <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: progress + '%' }}
                            ></motion.div> */}
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div style={labelForm}>
                                    <label >Price/Day in rupees.</label>
                                    <input required type="number" className="form-control" min="1000" ref={priceRef} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div style={labelForm}>
                                    <label>Car Pic</label><br />
                                    <input required type="file" onChange={onFileChange} />
                                    <p>Picture Uploaded {percentage}%</p>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg float-right"
                                style={styleBtn}>Add My Car</button>
                        </div>
                    </form>
                </div>
                <Footer style={{ position: "relative" }} />
            </div>

            {/* <div className="container"  >
                <div className="row">
                    <h1 style={{
                        margin: "30px 0 0 350px ",
                        color: "black",
                        fontFamily: "Roboto,Sans-serif",
                    }}>Add your Car For Rent</h1>
                </div>
            </div>
            <div className="container" style={{
                marginTop: "40px",
                width: "80%",
                height: "65vh",
                backgroundColor: "aliceblue",
                borderRadius: "15px",
                boxShadow: "0 0 2px 2px red"
            }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-row" >
                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>AutoMaker</label>
                            <input required type="text" className="form-control" ref={autoMakerRef} placeholder="e.g Toyota" />
                        </div>
                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>Model</label>
                            <input required type="text" className="form-control" ref={modelRef} placeholder="e.g Corolla" />
                        </div>
                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>Year</label>
                            <input required type="number" className="form-control" ref={yearRef} placeholder="e.g 2020" min="1970" />
                        </div>
                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>Type</label>
                            <select className="form-control" ref={typeRef}>
                                <option>Sedan</option>
                                <option>Hatchback</option>
                                <option>Mid-size Sedan</option>
                                <option>Crossover</option>
                                <option>SUV</option>
                                <option>Bike</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row" >
                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>Color</label>
                            <input required type="text" className="form-control" placeholder="e.g White" ref={colorRef} />
                        </div>

                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>Transmission</label>
                            <select className="form-control" ref={transmissionRef}>
                                <option>Automatic</option>
                                <option>Manual</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>Engine</label>
                            <select className="form-control" ref={engineRef}>
                                <option>660cc</option>
                                <option>1000cc</option>
                                <option>1300cc</option>
                                <option>1400cc</option>
                                <option>1600cc</option>
                                <option>1800cc</option>
                                <option>2000cc</option>
                                <option>2400cc</option>
                                <option>2700cc</option>
                                <option>3000cc</option>
                                <option>3500cc</option>
                                <option>4500cc</option>
                                <option>5700cc</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3" style={{ marginTop: "15px" }}>
                            <label>Interior Color</label>
                            <select className="form-control" ref={interiorColorRef}>
                                <option>Black</option>
                                <option>Beige</option>
                                <option>Dual-Tone</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input required type="text" className="form-control" id="inputAddress" placeholder="e.g 1234 Main St" ref={addressRef} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input required type="text" class="form-control" id="inputCity" ref={cityRef} />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Province</label>
                            <select className="form-control" ref={provinceRef}>
                                <option>Punjab</option>
                                <option>Sindh</option>
                                <option>KPK</option>
                                <option>Balouchistan</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label >Price/Day in rupees.</label>
                            <input required type="number" className="form-control" min="1000" ref={priceRef} />
                        </div>
                    </div>
                    <span>Upload picture</span>
                    <br></br>
                    <label>
                        <input type="file" onChange={onFileChange} />
                    </label>

                    <button type="submit" className="btn btn-success btn-lg float-right"
                        style={{ marginTop: "10px" }}>Add My Car</button>
                </form>
            </div> */}
        </>
    );
}

export default Form;