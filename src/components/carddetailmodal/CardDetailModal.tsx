import React, {FC} from "react";
import './CardDetailModal.css';

import {Button, Modal, Image, Row, Col} from 'react-bootstrap';

import QRCode from "react-qr-code";


interface CardDetailModalProps {
    NFTId: number;
    NFTAddress: URL;
    tonPrice: string;
    show: any;
    handleClose: any;
};

const CardDetailModal: FC<CardDetailModalProps> = ({NFTId, NFTAddress, tonPrice, show, handleClose}) => {

    const returnNFTQR = (NFTURL:string):any => {
        return (
            <QRCode value={NFTURL} size={200}/>
        );
    }

    return (
        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        dialogClassName="modal-50w"
        >
        <Modal.Body>
            <Image src="ticket.png" fluid/>

            <div className="text-center my-3">
                {returnNFTQR(NFTAddress.toString())}
            </div>

            <Row>
                <Col xs={4} className="vertically-centered text-center">
                    <h4 className="mb-0">#{NFTId}</h4>
                </Col>
                <Col xs={4} className="vertically-centered text-center">
                    <Button href={NFTAddress.toString()}>Ticket</Button>
                </Col>
                <Col xs={4} className="vertically-centered">
                    <p className="display-6 m-0 p-2">${tonPrice} </p>
                    <Image src="coin.png" width={40} height={40}/>
                </Col>
            </Row>
            
            

        </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default CardDetailModal;