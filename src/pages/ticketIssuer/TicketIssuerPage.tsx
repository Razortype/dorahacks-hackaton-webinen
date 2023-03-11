import React, { FC, useState, useEffect } from "react";
import { getEventByAddress } from '../../apiconnetion/EventConnetion';
import useConnectionStore from "../../store/connection-store/useConnectionStore";
import { IEvent } from "../../Interfaces/interfaces";

import { Image } from "react-bootstrap";

interface TicketIssuerProps {}

const TicketIssuer: FC<TicketIssuerProps> = (() => {

    const { connectOnLoad, address } = useConnectionStore();

    const [events, setEvents] = useState<IEvent[]>([]);
    useEffect(() => {
        if (address) {
            console.log(address);
            getEventByAddress(address)
            .then((res) => {
                setEvents(res.data);
                console.log(events);
            })
            .catch((e) => console.log(e));
        }
    }, [])

    return (
        <div className="">
            {events.length != 0
            ? <div>
                <h1>Sahip Olunan Eventler</h1>
                {events.map(({  id,  name,  event_image, date,  created_at}) => {
                    return (<div>
                        <Image
                            src={("http://razortype.pythonanywhere.com/"+event_image)}
                            fluid
                            className="border border-2 rounded-2 object-fit-cover"
                            // onClick={handleShow}
                            loading="lazy"
                        />
                        <h1>{name}</h1>
                    </div>)
                })}
            </div>
            : <div>Event creator değilsiniz!</div>
            }

        </div>
    );

})

export default TicketIssuer;