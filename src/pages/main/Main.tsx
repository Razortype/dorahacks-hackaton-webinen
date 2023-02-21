import React, { FC } from "react";
import "./Main.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UpperCards from "../../components/homapageMainCards/upperCards";
import SingleCard from "../../components/homapageMainCards/singleCard";

interface MainProps {}

const eventDatas = [
  {
    id: 2,
    name: "Test Event 2",
    event_image:
      "https://ipfs.io/ipfs/QmaqYKhFLRnnyVQLu5uYMuzvMgFFSiXA1udW6aEjCrgcNd",
    description:
      "Test Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description",
    capacity: 43,
    location: "https://goo.gl/maps/5f4fBpRh89CcoqXo8",
    creater_wallet_address: "qweQEqweqwe13231Asd",
    contract_address: "qweQWEqweqWeasdqWEa123",
    ticket_price: 0.003,
    duration: 120,
    date: "2023-02-26T09:30:00+03:00",
    created_at: "2023-02-19T15:21:03.189139+03:00",
    updated_at: "2023-02-19T15:21:03.189156+03:00",
  },
  {
    id: 1,
    name: "Test Event",
    event_image:
      "https://ipfs.io/ipfs/QmaqYKhFLRnnyVQLu5uYMuzvMgFFSiXA1udW6aEjCrgcNd",
    description:
      "Test Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description",
    capacity: 25,
    location: "https://goo.gl/maps/5f4fBpRh89CcoqXo8",
    creater_wallet_address: "qweQEqweqwe13231Asd",
    contract_address: "qweQWEqweqWeasdqWEa123",
    ticket_price: 0.003,
    duration: 60,
    date: "2023-02-25T18:00:00+03:00",
    created_at: "2023-02-19T14:25:45.814374+03:00",
    updated_at: "2023-02-19T15:20:57.837505+03:00",
  },
  {
    id: 3,
    name: "Test Event",
    event_image:
      "https://ipfs.io/ipfs/QmaqYKhFLRnnyVQLu5uYMuzvMgFFSiXA1udW6aEjCrgcNd",
    description:
      "Test Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description",
    capacity: 25,
    location: "https://goo.gl/maps/5f4fBpRh89CcoqXo8",
    creater_wallet_address: "qweQEqweqwe13231Asd",
    contract_address: "qweQWEqweqWeasdqWEa123",
    ticket_price: 0.003,
    duration: 60,
    date: "2023-02-25T18:00:00+03:00",
    created_at: "2023-02-19T14:25:45.814374+03:00",
    updated_at: "2023-02-19T15:20:57.837505+03:00",
  },
];

const Main: FC<MainProps> = ({}) => {
  const data = [
    {
      title: "Example Event Name",
      description:
        "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
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
      description:
        "Example ev ription for event. Example event description for event. Example event description for event. Example event description for event.",
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
      description:
        "Example even ription for event. Example event description for event. Example event description for event. Example event description for event.",
      date: new Date(628021800000), // epoch timstamp
      NFTId: 5122212,
      NFTAddress: "https://ton.nft.address.com/5122212/example",
      tonPrice: 0.005,
      purchaseTime: new Date(628021800000),
      expired: false,
      used: false,
    },
    {
      title: "Example Event Name",
      description:
        "Example event ription for event. Example event description for event. Example event description for event. Example event description for event.",
      date: new Date(628021800000), // epoch timstamp
      NFTId: 5122212,
      NFTAddress: "https://ton.nft.address.com/5122212/example",
      tonPrice: 0.005,
      purchaseTime: new Date(628021800000),
      expired: false,
      used: false,
    },
    {
      title: "Example Event Name",
      description:
        "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
      date: new Date(628021800000), // epoch timstamp
      NFTId: 5122212,
      NFTAddress: "https://ton.nft.address.com/5122212/example",
      tonPrice: 0.005,
      purchaseTime: new Date(628021800000),
      expired: false,
      used: false,
    },
    {
      title: "Example Event Name",
      description:
        "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
      date: new Date(628021800000), // epoch timstamp
      NFTId: 5122212,
      NFTAddress: "https://ton.nft.address.com/5122212/example",
      tonPrice: 0.005,
      purchaseTime: new Date(628021800000),
      expired: false,
      used: false,
    },
  ];

  return (
    <div className="w-100">
      <UpperCards />
      <Container className="p-1 ">
        <Row className="pt-3 justify-content-center text-center">
          <h1 style={{ color: "#22FA96" }}>Latest Events 🔥</h1>
        </Row>
        <Row className="pt-1 pb-3 justify-content-around">
          {eventDatas
            .slice(0, 3)
            .map(
              (
                {
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
                },
                index
              ) => {
                return (
                  <SingleCard
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
                    date={new Date(date)}
                    created_at={new Date(created_at)}
                    updated_at={new Date(updated_at)}
                  />
                );
              }
            )}
        </Row>
        <Row className="pt-3 justify-content-center text-center">
          <h1 style={{ color: "#FC4191" }}>Hurry Up! ⏳</h1>
        </Row>
        <Row className="p-3 justify-content-around">
          {eventDatas
            .slice(0, 3)
            .map(
              (
                {
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
                },
                index
              ) => {
                return (
                  <SingleCard
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
                    date={new Date(date)}
                    created_at={new Date(created_at)}
                    updated_at={new Date(updated_at)}
                  />
                );
              }
            )}
        </Row>
      </Container>
    </div>
  );
};

export default Main;
