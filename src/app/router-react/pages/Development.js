import React from "react"
import Intro from "../components/Intro"
import Card from "../components/Card"
import Box3 from "../img/Box3.jpg"
import Box4 from "../img/Box4.jpg"
import Box5 from "../img/Box5.jpg"
import Jumbotron from "../img/develop.jpg"

const intro = {
    content: "Quisque maximus a purus et hendrerit. Aliquam at volutpat nisi. Integer id vulputate ipsum. Aenean eu urna odio. Mauris ultrices varius consequat. Mauris quam est, aliquet vitae iaculis a, commodo quis tortor. Proin ac dapibus felis, quis efficitur risus. Morbi fermentum diam scelerisque orci facilisis, nec lobortis leo pulvinar. Quisque est risus, porttitor id dui suscipit, dignissim mollis felis. Suspendisse mollis nisi eu tortor gravida varius. Duis sodales magna sit amet dolor cursus egestas quis vitae nunc. "
}

const cards = [
    {
        imageUrl : Box3,
        title: "Progress",
        subtitle: "Praesent bibendum lectus a nunc semper rutrum. Cras dictum, lacus eget posuere consectetur, urna nunc porta neque, ut consequat libero risus eget ligula."
    },
    {
        imageUrl : Box4,
        title: "Development",
        subtitle: "Praesent bibendum lectus a nunc semper rutrum. Cras dictum, lacus eget posuere consectetur, urna nunc porta neque, ut consequat libero risus eget ligula."
    },
    {
        imageUrl : Box5,
        title: "New",
        subtitle: "Praesent bibendum lectus a nunc semper rutrum. Cras dictum, lacus eget posuere consectetur, urna nunc porta neque, ut consequat libero risus eget ligula."
    }
]

const Development = () => (
    <div className="container">
        <h1 style={{textAlign:'center'}}>Development</h1>
        <div className="row" style={{marginTop:40, marginBottom: 100}}>
            <Intro content={intro.content} />
            <div className="col-md-6" >
                <img className="imagesize" src={Jumbotron} alt=""/>
            </div>
        </div>
        <div className="row" style={{marginBottom: 50}}>
            {
                cards.map(card => (
                    <Card
                        imageUrl={card.imageUrl}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))
            }
        </div>
    </div>
)

export default Development