import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UpperCards from "../../components/homapageMainCards/upperCards";
import SingleCard from "../../components/homapageMainCards/singleCard";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {

  const [mainPageData, setMainPageData] = useState<any[]>([])
  const [latestEvents, setLatestEvents] = useState<any[]>([])
  const [hurrupEvents, setHurrupEvents] = useState<any[]>([])
  useEffect(() => {
    axios.get("http://razortype.pythonanywhere.com/api/mainpage?format=json")
    .then((response: any) => {
      setMainPageData(response.data.random)
      setLatestEvents(response.data.latest)
      setHurrupEvents(response.data.hurry)
      console.log("myDatam",response.data)
      
    })
    .catch((e) => alert(e))
  },[])

  // const [events, setEvents] = useState([])
  // useEffect(() => {
  //   axios.get("http://razortype.pythonanywhere.com/api/events/all/?format=json")
  //   .then((response: any) => {
  //     setEvents(response.data)
  //     console.log(response.data)
  //   })
  //   .catch((e) => alert(e))
  // }, [])

  return (
    <div className="w-100">
      <UpperCards 
      id={[mainPageData[0]?.id, mainPageData[1]?.id, mainPageData[2]?.id]}
      name={[mainPageData[0]?.name, mainPageData[1]?.name, mainPageData[2]?.name]}
      event_image={[mainPageData[0]?.event_image, mainPageData[1]?.event_image, mainPageData[2]?.event_image]}
      description={[mainPageData[0]?.description, mainPageData[1]?.description, mainPageData[2]?.description]}
      capacity={[mainPageData[0]?.capacity, mainPageData[1]?.capacity, mainPageData[2]?.capacity]}
      location={[mainPageData[0]?.location, mainPageData[1]?.location, mainPageData[2]?.location]}
      creater_wallet_address={[mainPageData[0]?.creater_wallet_address, mainPageData[1]?.creater_wallet_address, mainPageData[2]?.creater_wallet_address]}
      contract_address={[mainPageData[0]?.contract_address, mainPageData[1]?.contract_address, mainPageData[2]?.contract_address]}
      ticket_price={[mainPageData[0]?.ticket_price, mainPageData[1]?.ticket_price, mainPageData[2]?.ticket_price]}
      duration={[mainPageData[0]?.duration, mainPageData[1]?.duration, mainPageData[2]?.duration]}
      date={[new Date(mainPageData[0]?.date), new Date(mainPageData[1]?.date), new Date(mainPageData[2]?.date)]}
      created_at={[new Date(mainPageData[0]?.created_at), new Date(mainPageData[1]?.created_at), new Date(mainPageData[2]?.created_at)]}
      updated_at={[new Date(mainPageData[0]?.updated_at), new Date(mainPageData[1]?.updated_at), new Date(mainPageData[2]?.updated_at)]}
      />
      <Container className="p-1 ">
        <Row className="pt-3 justify-content-center text-center">
          <div id="lastest-header" className="events__header">
            <h1>- Latest Events -</h1>
          </div>
        </Row>
        <Row className="pt-1 pb-3 justify-content-around">
          {latestEvents
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
          {hurrupEvents
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
