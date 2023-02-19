import React, {FC} from "react";
import {Button, Modal, Image, Row, Col} from 'react-bootstrap';
import './HomepageEventModal.css';

interface HomepageEventModalProps{
    id: number;
    name: string;
    event_image: string;
    description: string;
    capacity: number;
    location: string;
    creater_wallet_address: string;
    contract_address: string;
    ticket_price: number;
    duration: number;
    date: Date;
    created_at: Date;
    updated_at: Date;
    show: any;
    handleClose: any;
}

const HomepageEventModal: FC<HomepageEventModalProps> = ({
    id,
    name,
    event_image,
    description,
    capacity,
    location,
    creater_wallet_address,
    contract_address,
    ticket_price,
    duration,
    date,
    created_at,
    updated_at,
    show,
    handleClose }) => {
    
    return ( <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        dialogClassName="modal-50w"
        >
        <Modal.Body>
            <Image src={event_image} fluid/>


            <Row>
                <Col xs={4} className="vertically-centered text-center">
                    <h4 className="mb-0">#{name}</h4>
                </Col>
                <Col xs={4} className="vertically-centered text-center">
                    <Button href={contract_address}>Ticket</Button>
                </Col>
                <Col xs={4} className="vertically-centered">
                    <p className="display-6 m-0 p-2">${ticket_price} </p>
                    <Image src="coin.png" width={40} height={40}/>
                </Col>
            </Row>
            
            

        </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>)
}

export default HomepageEventModal;