import React from "react";
import "./widget-style.css";
import Container from "../Container"
// import thing from "../../../public/media/logo.png"

// import { Card, Row, Col } from 'react-bootstrap';

const Widget = (props) => {
    return (

        <Container>
            <div className="row justify-content-center">
                <div className="card">
                    <div className="logo-container">
                        <img src="../../../media/logo.png" className="card-img-top main-logo" alt="..." />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Hey there! During this uncertain time we would love to hear about what is working and what doesnt really work well.</p>
                        <div>Thanks,</div>
                        <div>Seven Oaks</div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Please enter your comments and suggestions below and click submit.</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="button" class="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Widget;