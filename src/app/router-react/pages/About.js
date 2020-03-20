import React from "react"
import Intro from "./../components/Intro"
import Card from "./../components/Card"
import Box1 from "../img/box1.jpg"
import Box2 from "../img/box2.jpg"

const intro = {
    content:    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed feugiat nulla, ac pellentesque justo.
                Aenean sit amet nibh at tellus aliquam accumsan quis vel augue. Nam ipsum leo, volutpat et fermentum eget, elementum eget risus. Etiam non tempus nisl.
                Sed at viverra lacus. Sed et ligula in ligula laoreet tincidunt et eget libero. Morbi gravida purus consequat enim dictum, in suscipit ipsum elementum. `
}

const features = [
    {title: 'Header1',   desc: 'Aenean non auctor ex. Suspendisse tristique, mauris ut imperdiet porta, enim ligula elementum eros, eu iaculis nisi urna a lorem. Vestibulum venenatis in nulla vitae cursus.'},
    {title: 'Header2',    desc: 'Mauris interdum id lacus pellentesque pretium. Vivamus eros dui, tristique et sem sit amet, consequat venenatis ante.'},
    {title: 'Header3',   desc: 'Donec rhoncus arcu quis sapien efficitur tincidunt. Nunc sed lectus id orci porttitor mattis vitae hendrerit risus. Donec laoreet porttitor ullamcorper.'},
]

const cards = [
    {title: 'Corona Virus Disease', imageUrl: Box1},
    {title: 'COVID-19', imageUrl: Box2},
]

const About = () => (
    <div className="container">
        <h1 style={{textAlign: 'center'}}> About </h1>
        <div className="row" style={{marginTop: 40, marginBottom: 100}}>
            <Intro content={intro.content} />

            <div className="col-md-6 box450border">
                {features.map(feature =>(
                    <div>
                        <h5><strong>{feature.title}</strong></h5>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="row" style={{marginBotton: 50}}>
            {
                cards.map(card => (
                    <Card imageUrl={card.imageUrl} title={card.title}/>
                ))
            }
        </div>
    </div>
)

export default About