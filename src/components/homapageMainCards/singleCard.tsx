import { Row, Col, Container, Image, Table } from "react-bootstrap";
import "./singleCard.css";
import React, { FC, useState } from "react";
import HomepageEventModal from "./HomepageEventModal";

interface CardProps {
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
}

const SingleCard: FC<CardProps> = ({
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
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col
      xs={12}
      lg={4}
      className="single__card border border-1 m-2 p-0 border border-1 rounded-2"
    >
      <Image
        src={event_image}
        fluid
        className="border border-2 rounded-2 object-fit-cover"
        onClick={handleShow}
        loading="lazy"
      />
      {/*beautiful font, max length and readable date informations*/}
{/* 
      <Table className="table table-dark table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">
              <h5 className="text-center m-2">{name}</h5>
            </th>
          </tr>
        </thead>
        <tbody className="align-bottom overflow-hidden">
           <tr>
            <td className="text-center">{description}</td>
          </tr>
          <tr>
            <td className="text-center">{capacity}</td>
          </tr> 
          <tr>
            <td className="text-center">{location}</td>
          </tr>
          <tr>
            <td className="text-center">{creater_wallet_address}</td>
          </tr>
          <tr>
            <td className="text-center">{contract_address}</td>
          </tr>
          <tr>
            <td className="text-center">{ticket_price}</td>
          </tr>
          <tr>
            <td className="text-center">{duration}</td>
          </tr>
          <tr>
            <td className="text-center">{date.toString()}</td>
          </tr>
          <tr>
            <td className="text-center">{created_at.toString()}</td>
          </tr>
          <tr>
            <td className="text-center">{updated_at.toString()}</td>
          </tr>
          <tr>
            <td className="text-center rounded-bottom">
              <button
                className="btn btn-primary"
                onClick={handleShow}
                type="button"
              >
                More
              </button>
            </td>
          </tr>
        </tbody>
      </Table>  */}
      <HomepageEventModal
        id={id}
        name={name}
        event_image={event_image}
        description={description}
        capacity={capacity}
        location={location}
        creater_wallet_address={creater_wallet_address}
        contract_address={contract_address}
        ticket_price={ticket_price}
        duration={duration}
        date={date}
        created_at={created_at}
        updated_at={updated_at}
        show={show}
        handleClose={handleClose}
      />
    </Col>
  );
};

export default SingleCard;
