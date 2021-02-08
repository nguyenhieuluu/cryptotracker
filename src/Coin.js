import React from 'react';
import './Coin.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {

    return (
 
        <Container className="coin">
            <Row>
                <Col className="coin-name">
                    <img src={image} alt="crypto" />
                    <h6> {name} </h6>
                </Col>
                <Col className="coin-symbol"> {symbol} </Col>
                <Col className="coin-price"> ${price} </Col>
                <Col  className="coin-volume"> ${volume.toLocaleString()} </Col>
        

                {priceChange < 0 ? (
                    <Col className="coin-percent red">{priceChange.toFixed(2)}% </Col>
                ) : (
                    <Col className="coin-percent green">{priceChange.toFixed(2)}% </Col>
                )}

                <Col className="coin-marketcap">
                    ${marketcap.toLocaleString()} 
                </Col>

            </Row>
        </Container>

    )




}


export default Coin;