import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UpperCards from "../../components/homapageMainCards/upperCards";
import SingleCard from "../../components/homapageMainCards/singleCard";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {

  const [mainPageData, setMainPageData] = useState([])
  useEffect(() => {
    
  })

  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get("http://razortype.pythonanywhere.com/api/events/all/?format=json")
    .then((response: any) => {
      setEvents(response.data)
      console.log(response.data)
    })
    .catch((e) => alert(e))
  }, [])

  return (
    <div className="w-100">
      <UpperCards />
      <Container className="p-1 ">
        <Row className="pt-3 justify-content-center text-center">
          <div id="lastest-header" className="events__header">
            <h1>- Latest Events -</h1>
          </div>
        </Row>
        <Row className="pt-1 pb-3 justify-content-around">
          {events
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
          <div id="hurry-header" className="events__header">
            <h1>Hurry Up &nbsp; &nbsp; &nbsp; !</h1>
          </div>
        </Row>
        <Row className="p-3 justify-content-around">
          {events
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
