import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Com from '../../constants/Component';
import './home.scss'
import img from "../../assets/Img";
import Typed from 'react-typed';
import HomePage from './HomePage';

function Home() {
    return (
        <>
            <Container fluid='md'>
                <Com.HomePage />
            </Container>

            <div className="app__home__digital">
                <Com.Digital/>
            </div>

            <div className="app__home__people">
                <Com.People/>
            </div>

            <div className="app__home__news">
                <Com.News/>
            </div>
        </>
    )
}

export default Home