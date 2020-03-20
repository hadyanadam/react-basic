import React from "react"
import "./../styles.css"

const Card = (props) => (
    <div className="col-md-6">
        <div className="card text-center">
            <img src={props.imageUrl} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.subtitle}</p>
                <a href="#lanjut" className="btn buttonAction">Lanjut</a>
            </div>
        </div>
    </div>
)

export default Card