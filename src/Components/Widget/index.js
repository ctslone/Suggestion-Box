import React from "react";
import "./widget-style.css";

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
    )
}

export default Widget;