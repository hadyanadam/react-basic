import React from 'react'
import Jumbotron from '../img/jumbotron.jpg'

const Home = () => (
    <div style={styles.container}>
        <img
            style={styles.imageCover}
            src={Jumbotron}
            alt="belajarcoding"
        />
        <div style={styles.blockText}>
            <h1>Welcome to my website</h1>
            <h4>
                if life is a book, read every page.
            </h4>
        </div>
    </div>
)

const styles={
    container: {
        position:'relative',
        textAlign: 'center'
    },
    imageCover: {
        width: '100%'
    },
    blockText: {
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        color: 'white'
    }
}

export default Home