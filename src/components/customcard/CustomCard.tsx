import React, {FC, useState} from "react";

import { Card, Button, ListGroup, Row, Col } from "react-bootstrap";

import CardDetailModal from "../carddetailmodal/CardDetailModal";

import './CustomCard.css';

interface CustomCardProps {
    index: number,
    title: string;
    description: string;
    date: Date;
    NFTId: number;
    NFTAddress: string;
    tonPrice: number;
    purchaseTime: Date;
    expired: boolean;
    used: boolean;
}

const CustomCard: FC<CustomCardProps> = ({index, title, description, date, NFTId, NFTAddress, tonPrice, purchaseTime, expired, used}) => {
    
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="custom__card p-2 m-3">
                <div className="card__rectangle" />
                <Card.Body>
                    <Card.Title className="card__title d-flex flex-sm-column flex-lg-row justify-content-between">
                        {title}
                    </Card.Title>
                    
                    <Card.Text>

                        <Row>
                            <Col xs={10} lg={10}>
                                <ListGroup className="card__list__group" variant="flush">
                                    <ListGroup.Item>
                                        <h5><b>Description:</b></h5>
                                        {description}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <h5>Dates</h5>
                                        <b>Event Date :</b> {date.toString()} <br />
                                        <b>Purchased Date :</b> {purchaseTime.toString()}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <ul className="m-0 p-0  d-flex flex-row">
                                            <li className="card__condition me-2 me-sm-3">Valid : {used ? "❌" : "✅"}</li>
                                            <li className="card__condition">Event: {expired ? "❌" : "✅"}</li>
                                        </ul>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col xs={2} lg={2}>
                                <div className="card__price">
                                    <div>
                                        {tonPrice} TON COIN
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Card.Text>
                    
                    <Button className="card__button me-3">Go to the Event</Button>
                    <Button className="card__button" onClick={() => handleShow()}>NFT Detail</Button>
                    
                </Card.Body>
            </Card>
            <CardDetailModal NFTId={NFTId} NFTAddress={NFTAddress} tonPrice={tonPrice} show={show} handleClose={handleClose}/>
        </>
    );
};

export default CustomCard;