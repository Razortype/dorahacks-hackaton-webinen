import React, {FC} from "react";
import './Main.css';

import {Container, Row, Col, Card, Button} from "react-bootstrap";
import UpperCards from "../../components/homapageMainCards/upperCards";
import SingleCard from "../../components/homapageMainCards/singleCard";

interface MainProps {

}

const Main: FC<MainProps> = ({}) => {

    const data = [
        {
            title: "Example Event Name",
            description: "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
            date: new Date(628021800000), // epoch timstamp
            NFTId: 5122212,
            NFTAddress: "https://ton.nft.address.com/5122212/example",
            tonPrice: 5,
            purchaseTime: new Date(628021800000),
            expired: false,
            used: false,
        },
        {
            title: "Example Event Name",
            description: "Example ev ription for event. Example event description for event. Example event description for event. Example event description for event.",
            date: new Date(628021800000), // epoch timstamp
            NFTId: 5122212,
            NFTAddress: "https://ton.nft.address.com/5122212/example",
            tonPrice: 5,
            purchaseTime: new Date(628021800000),
            expired: false,
            used: false,
        },
        {
            title: "Example Event Name",
            description: "Example even ription for event. Example event description for event. Example event description for event. Example event description for event.",
            date: new Date(628021800000), // epoch timstamp
            NFTId: 5122212,
            NFTAddress: "https://ton.nft.address.com/5122212/example",
            tonPrice: 0.005,
            purchaseTime: new Date(628021800000),
            expired: false,
            used: false,
        },{
            title: "Example Event Name",
            description: "Example event ription for event. Example event description for event. Example event description for event. Example event description for event.",
            date: new Date(628021800000), // epoch timstamp
            NFTId: 5122212,
            NFTAddress: "https://ton.nft.address.com/5122212/example",
            tonPrice: 0.005,
            purchaseTime: new Date(628021800000),
            expired: false,
            used: false,
        },{
            title: "Example Event Name",
            description: "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
            date: new Date(628021800000), // epoch timstamp
            NFTId: 5122212,
            NFTAddress: "https://ton.nft.address.com/5122212/example",
            tonPrice: 0.005,
            purchaseTime: new Date(628021800000),
            expired: false,
            used: false,
        },{
            title: "Example Event Name",
            description: "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
            date: new Date(628021800000), // epoch timstamp
            NFTId: 5122212,
            NFTAddress: "https://ton.nft.address.com/5122212/example",
            tonPrice: 0.005,
            purchaseTime: new Date(628021800000),
            expired: false,
            used: false,
        },
    ]
    


    return (
        <div className="w-100">
            <UpperCards />
            <Container className="p-3 ">
                <Row className="p-3 justify-content-center">
                {data.slice(0,5).map(({title, description, date, NFTId, NFTAddress, tonPrice, purchaseTime, expired, used}, index) => {
                    return (
                   <SingleCard index={index}
                   title={title}
                   description={description}
                   date={date} NFTId={NFTId}
                   NFTAddress={NFTAddress}
                   tonPrice={tonPrice}
                   purchaseTime={purchaseTime}
                   expired={expired}
                   used={used}/>
                   )
                })}
                </Row>
            </Container>
        </div>
    );
};

export default Main;