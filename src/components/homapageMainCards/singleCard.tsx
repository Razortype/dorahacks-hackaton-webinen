import { Row, Col, Container, Image, Table } from "react-bootstrap";
import "./singleCard.css";
import React, { FC, useState } from "react";


interface CardProps {
  id: number,
  name: string,
  event_image: string,
  description: string,
  capacity: number
  location: string,
  creater_wallet_address: string,
  contract_address: string,
  ticket_price: number
  duration: number,
  date: Date,
  created_at: Date,
  updated_at: Date
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
  return (
    <Col
      xs={12}
      lg={4}
      className="single__card border border-1 m-2 p-0 border border-1 rounded-2"
    >
      <Image
        src="ticket.png"
        fluid
        className="border border-1 rounded-2 object-fit-cover"
      />
      {/*beautiful font, max length and readable date informations*/}

      <Table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col"><h5 className="text-center m-2">{name}</h5></th>
          </tr>
        </thead>
        <tbody className="align-bottom">
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
            <td className="text-center">{created_at.toString()}</td>
          </tr>
          <tr>
            <td className="text-center">{updated_at.toString()}</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default SingleCard;
