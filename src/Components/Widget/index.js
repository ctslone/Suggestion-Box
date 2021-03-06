import React from "react";
import "./widget-style.css";
import Container from "../Container"
// import thing from "../../../public/media/logo.png"

// import { Card, Row, Col } from 'react-bootstrap';

const Widget = (props) => {
    return (

        <Container>
            <div className="row justify-content-center widget">
                <div className="card col-10 widget__text">
                    <div className="widget__image-box">
                        <img src="../../../media/logo.png" className="card-img-top widget__image-box--logo" alt="..." />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Hey there! During this uncertain time we would love to hear about what is working and what doesnt really work well.</p>
                        <div>Thanks,</div>
                        <div>Seven Oaks</div>

                        <div className="form-group">
                        <hr></hr>
                            <label htmlFor="exampleFormControlTextarea1">Please enter your comments and suggestions below and click submit.</label>
                            
                            <textarea className="form-control" rows="3" value={props.value} onChange={props.handleChange}></textarea>
                        </div>

                        <button onClick={() => props.handleSubmit()} type="button" className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Widget;