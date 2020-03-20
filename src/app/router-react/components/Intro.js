import React from "react"
import "./../styles.css"

const Intro = (props) => (
    <div className="col-md-6" style={styles.box450}>
        <h4 style={styles.greyText}>
            {props.content}
        </h4>
        <a href="#selengkapnya" className="btn buttonAction">
            Selengkapnya..
        </a>
    </div>
)

const styles = {
    box450: {
        height: "450px"
    },
    greyText: {
        color: "#80800"
    }
}

export default Intro