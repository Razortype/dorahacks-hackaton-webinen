import React, {FC, useState} from "react";

import { Card, Button, ListGroup, Row, Col } from "react-bootstrap";

import CardDetailModal from "../carddetailmodal/CardDetailModal";

import './CustomCard.css';

interface IEvent {
    id: number;
    name: string;
    event_image: string;
    description: string;
    capacity: number;
    location: string;
    creater_wallet_address: string;
    contract_address: string;
    ticket_price: string;
    duration: number;
    date: string;
    created_at: string;
    updated_at: string;
} // event_image, location, date, created_at, updated_at => ll be converted

interface IAttr {
    trait_type: string,
    value: string,
}

interface CustomCardProps {
    index: number;
    id: number,
    event: IEvent;
    ipfs_url: URL;
    nft_id: number;
    ton_price: string;
    used: boolean;
    expired: boolean;
    created_at: Date;
    updated_at: Date;
    attrs: Array<IAttr>
}

const CustomCard: FC<CustomCardProps> = ({index, id, event, ipfs_url, nft_id, ton_price, used, expired, created_at, updated_at, attrs}) => {
    
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="custom__card p-2 m-3">
                <div className="card__rectangle" />
                <Card.Body>
                    <Card.Title className="card__title d-flex flex-sm-column flex-lg-row justify-content-between">
                        {event.name}
                    </Card.Title>
                    
                    <Card.Text>

                        <Row>
                            <Col xs={10} lg={10}>
                                <ListGroup className="card__list__group" variant="flush">
                                    <ListGroup.Item>
                                        <h5><b>Description:</b></h5>
                                        {event.description}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <h5>Dates</h5>
                                        <b>Event Date :</b> {event.date.toString()} <br />
                                        <b>Purchased Date :</b> {created_at.toString()}
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
                                        {ton_price} TON COIN
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Card.Text>
                    
                    <Button className="card__button me-3">Go to the Event</Button>
                    <Button className="card__button" onClick={() => handleShow()}>NFT Detail</Button>
                    
                </Card.Body>
            </Card>
            <CardDetailModal NFTId={nft_id} NFTAddress={ipfs_url} tonPrice={ton_price} show={show} handleClose={handleClose}/>
        </>
    );
};

export default CustomCard;