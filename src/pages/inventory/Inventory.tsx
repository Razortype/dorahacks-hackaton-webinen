import React, { FC } from "react";
import "./Inventory.css";

import CustomCard from "../../components/customcard/CustomCard";

interface InventoryProps {

}



const Inventory: FC<InventoryProps> = ({}) => {
    
    const data = [
        {
            title: "Example Event Name",
            description: "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
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
            description: "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
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
            description: "Example event description for event. Example event description for event. Example event description for event. Example event description for event.",
            date: new Date(628021800000), // epoch timstamp
            NFTId: 5122212,
            NFTAddress: "https://ton.nft.address.com/5122212/example",
            tonPrice: 0.005,
            purchaseTime: new Date(628021800000),
            expired: false,
            used: false,
        },
    ]
    
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
                {data.map(({title, description, date, NFTId, NFTAddress, tonPrice, purchaseTime, expired, used}, index) => {
                    return (
                        <CustomCard
                        index={index}
                        title={title}
                        description={description}
                        date={date} NFTId={NFTId}
                        NFTAddress={NFTAddress}
                        tonPrice={tonPrice}
                        purchaseTime={purchaseTime}
                        expired={expired}
                        used={used}
                        />
                    )
                })}
            </div>

        </div>
    );
};

export default Inventory;