import { Row, Col, Container, Image } from "react-bootstrap";
import React, { FC } from "react";
import "./upperCards.css"
import HomepageEventModal from "./HomepageEventModal";

interface CardProps {
    id: number[];
    name: string[];
    event_image: string[];
    description: string[];
    capacity: number[];
    location: string[];
    creater_wallet_address: string[];
    contract_address: string[];
    ticket_price: number[];
    duration: number[];
    date: Date[];
    created_at: Date[];
    updated_at: Date[];
  }
const UpperCards: FC<CardProps>= ({
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
  }) => {

    const [show1, setShow1] = React.useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = React.useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = React.useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    
    return (
        <Container className="p-1">
                {/* create 3 cards first vard wiil placed first columng 1 and 2. rows and other cards right of card1 one of bottom other top*/}
                <Row className="p-3 ">
                    <Col xs={12} lg={8} >
                        <div onClick={handleShow1}>
                    <Image src={("http://razortype.pythonanywhere.com/"+event_image[0]) || "ticket.png"} fluid className="border border-1 rounded-4 object-fit-cover"/>
                    </div>
                    </Col>
                    <Col xs={12} lg={4} className="">
                    <div onClick={handleShow2}>
                    <Image src={("http://razortype.pythonanywhere.com/"+event_image[1])  || "ticket.png"} fluid  className="border border-1 rounded-2 object-fit-cover" />
                    </div>
                    <div onClick={handleShow3}>
                    <Image src={("http://razortype.pythonanywhere.com/"+event_image[2])  || "ticket.png"} fluid className="mt-2 border border-1 rounded-2 object-fit-cover" />
                    </div>
                    </Col>
                </Row>

                
           
        
                <HomepageEventModal
        id={id[0]}
        name={name[0]}
        event_image={("http://razortype.pythonanywhere.com/"+event_image[0]) || "ticket.png"}
        description={description[0]}
        capacity={capacity[0]}
        location={location[0]}
        creater_wallet_address={creater_wallet_address[0]}
        contract_address={contract_address[0]}
        ticket_price={ticket_price[0]}
        duration={duration[0]}
        date={date[0]}
        created_at={created_at[0]}
        updated_at={updated_at[0]}
        show={show1}
        handleClose={handleClose1}
      />
        <HomepageEventModal
        id={id[1]}
        name={name[1]}
        event_image={("http://razortype.pythonanywhere.com/"+event_image[1]) || "ticket.png"}
        description={description[1]}
        capacity={capacity[1]}
        location={location[1]}
        creater_wallet_address={creater_wallet_address[1]}
        contract_address={contract_address[1]}
        ticket_price={ticket_price[1]}
        duration={duration[1]}
        date={date[1]}
        created_at={created_at[1]}
        updated_at={updated_at[1]}
        show={show2}
        handleClose={handleClose2}
        />
        <HomepageEventModal
        id={id[2]}
        name={name[2]}
        event_image={("http://razortype.pythonanywhere.com/"+event_image[2]) || "ticket.png"}
        description={description[2]}
        capacity={capacity[2]}
        location={location[2]}
        creater_wallet_address={creater_wallet_address[2]}
        contract_address={contract_address[2]}
        ticket_price={ticket_price[2]}
        duration={duration[2]}
        date={date[2]}
        created_at={created_at[2]}
        updated_at={updated_at[2]}
        show={show3}
        handleClose={handleClose3}
        />
    </Container>
    );
};

export default UpperCards;