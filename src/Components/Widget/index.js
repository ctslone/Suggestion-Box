import React from "react";
import "./widget-style.css";

import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const Widget = (props) => {
    return (
        <div class="container">
            <form id="suggestion_box" action="" method="post">
                <h3>Suggestion box</h3>
                <h5>Or general improvement ideas</h5>
                <fieldset>
                    <textarea placeholder="Suggestion" tabindex="5" name="suggestion_text" required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="suggestion_box" data-submit="...Sending" value="text to send">Submit</button>
                </fieldset>
            </form>
        </div>
        // <Container>
        //     <Form>
        //         <FormGroup>
        //             <Label for="exampleEmail">Email</Label>
        //             <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        //         </FormGroup>
        //         <FormGroup>
        //             <Label for="examplePassword">Password</Label>
        //             <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        //         </FormGroup>


        //         <FormGroup>
        //             <Label for="exampleText">Text Area</Label>
        //             <Input type="textarea" name="text" id="exampleText" />
        //         </FormGroup>

        //         <Button>Submit</Button>
        //     </Form>
        // </Container>
    )
}

export default Widget;