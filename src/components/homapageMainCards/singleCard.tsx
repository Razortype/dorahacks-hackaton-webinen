import { Row, Col, Container, Image, Table } from "react-bootstrap";
import "./singleCard.css";
import React, {FC, useState} from "react";


interface CardProps {
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


const SingleCard: FC<CardProps>= ({index, title, description, date, NFTId, NFTAddress, tonPrice, purchaseTime, expired, used}) => {
    
    return (
                    <Col xs={12} lg={2} className="border border-1 m-2 p-0 border border-1 rounded-2">
                    <Image src="ticket.png" fluid  className="border border-1 rounded-2 object-fit-cover" />
                    {/*beautiful font, max length and readable date informations*/ }
                    
                    
         
                    
<Table className="table table-dark table-striped">
  <thead>
    <tr>

      <th scope="col"><h5 className="text-center m-2">{title}</h5></th>
    </tr>
  </thead>
  <tbody className="align-bottom">
    <tr>

      <td><p className="">{description.substring(0,40)}...</p></td>
    </tr>
    <tr>

      <td> <div className="d-flex justify-content-between"><p className="  text-start">Date</p> <p className="">{date.getDate()+"/"+ date.getMonth()+"/"+date.getFullYear()}</p></div></td>
    </tr>
    <tr>

      <td>  <div className="d-flex justify-content-between"><p className="  text-start">Time </p> <p className="">{date.getHours()+":"+date.getMinutes()}</p></div></td>
    </tr>
     <tr>

      <td>  <div className="d-flex justify-content-between"><p className="  text-start">Price</p> <p className="">${tonPrice} Ton</p></div></td>
    </tr>
  </tbody>
</Table>
                    
                    </Col>

    );
};

export default SingleCard;