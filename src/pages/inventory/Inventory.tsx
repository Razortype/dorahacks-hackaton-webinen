import React, { FC, useState, useEffect } from "react";
import "./Inventory.css";

import CustomCard from "../../components/customcard/CustomCard";
import { getTicketForInventory } from "../../apiconnetion/TicketConnection";
import useConnectionStore from "../../store/connection-store/useConnectionStore";

interface InventoryProps {}


const TicketData = [
    {
        "id": 2,
        "event": {
            "id": 1,
            "name": "Test Event",
            "event_image": "http://127.0.0.1:8000/media/images/webticket.png",
            "description": "Test Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description",
            "capacity": 25,
            "location": "https://goo.gl/maps/5f4fBpRh89CcoqXo8",
            "creater_wallet_address": "qweQEqweqwe13231Asd",
            "contract_address": "qweQWEqweqWeasdqWEa123",
            "ticket_price": "0.003",
            "duration": 60,
            "date": "2023-02-25T18:00:00+03:00",
            "created_at": "2023-02-19T14:25:45.814374+03:00",
            "updated_at": "2023-02-19T15:20:57.837505+03:00"
        },
        "ipfs_url": "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
        "nft_id": 12312,
        "ton_price": "0.0232",
        "used": false,
        "expired": false,
        "created_at": "2023-02-19T17:41:44.015524+03:00",
        "updated_at": "2023-02-19T17:41:44.015560+03:00",
        "attrs": [
            {
                "trait_type": "test-event-attr",
                "value": "value123"
            }
        ]
    },
    {
        "id": 1,
        "event": {
            "id": 1,
            "name": "Test Event2",
            "event_image": "http://127.0.0.1:8000/media/images/webticket.png",
            "description": "Test Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description\r\nTest Description Test Description Test Description Test Description Test Description Test Description",
            "capacity": 25,
            "location": "https://goo.gl/maps/5f4fBpRh89CcoqXo8",
            "creater_wallet_address": "qweQEqweqwe13231Asd",
            "contract_address": "qweQWEqweqWeasdqWEa123",
            "ticket_price": "0.003",
            "duration": 60,
            "date": "2023-02-25T18:00:00+03:00",
            "created_at": "2023-02-19T14:25:45.814374+03:00",
            "updated_at": "2023-02-19T15:20:57.837505+03:00"
        },
        "ipfs_url": "https://ipfs.io/ipfs/Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
        "nft_id": 231243,
        "ton_price": "0.00342",
        "used": false,
        "expired": true, 
        "created_at": "2023-02-19T17:41:24.731674+03:00",
        "updated_at": "2023-02-19T17:41:24.731701+03:00",
        "attrs": []
    }
]

const Inventory: FC<InventoryProps> = ({}) => {

    const { connectOnLoad, address } = useConnectionStore();

    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        if (address) {
            getTicketForInventory(address)
            .then((res) => {setTickets(res.data)})
            .catch((e) => console.log(e));
        }
    }, [address])

    return (
        <div id="inventory-page" className="w-100">

            {/* <div className="header__square" /> */}

            <div className="header__box mt-5">
                <div className="content">
                    <div className="header__filter"></div>

                    <div id="squares">
                        <div className="header__square square-1" />
                        <div className="header__square square-2" />
                        <div className="header__square square-3" />
                    </div>

                    <div className="header__content">
                        <h1>Your Tickets</h1>
                    </div>
                </div>
            </div>

            <div className="activity__section container p-0 p-sm-5 text-dark">
                {tickets.map(({id, event, ipfs_url, nft_id, ton_price, used, expired, created_at, updated_at, attrs}, index) => {
                    return (
                        <CustomCard
                        index={index}
                        id={id}
                        event={event}
                        ipfs_url={new URL(ipfs_url)}
                        nft_id={nft_id}
                        ton_price={ton_price}
                        used={used}
                        expired={expired}
                        created_at={new Date(created_at)}
                        updated_at={new Date(updated_at)}
                        attrs = {attrs}
                        />
                    )
                })}
            </div>

        </div>
    );
};

export default Inventory;