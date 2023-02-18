import { Row, Col, Container, Image } from "react-bootstrap";
import "./upperCards.css"


const UpperCards= () => {
    
    return (
        <Container className="p-3">
                {/* create 3 cards first vard wiil placed first columng 1 and 2. rows and other cards right of card1 one of bottom other top*/}
                <Row className="p-3 ">
                    <Col xs={12} lg={8} >
                    <Image src="ticket.png" fluid className="border border-1 rounded-4 object-fit-cover"/>
                    </Col>
                    <Col xs={12} lg={4} className="">
                    <Image src="ticket.png" fluid  className="border border-1 rounded-2 object-fit-cover" />
                    <Image src="ticket.png" fluid className="mt-2 border border-1 rounded-2 object-fit-cover" />
                    </Col>
                </Row>

                
           
        
        
    </Container>
    );
};

export default UpperCards;