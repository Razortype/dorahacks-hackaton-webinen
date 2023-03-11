import React, { FC, useEffect, useState } from "react";

import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { SendTransactionRequest } from "@tonconnect/sdk/lib/types/models/methods/send-transaction/send-transaction-request";
import { transfer,burn } from "../../lib/jetton-minter";
import { jettonDeployController } from "../../lib/deploy-controller";
import WalletConnection from "../../services/wallet-connection";
import { toDecimalsBN } from "../../lib/utils";
import useConnectionStore from "../../store/connection-store/useConnectionStore";
import { Address, beginCell, Cell, toNano } from "ton";
import BigNumber from "bignumber.js";
import BN from "bn.js";
import { zeroAddress } from "../../lib/utils";

// import { getAllTickets, getTicketById, ticketIssuer } from "../../apiconnetion/ticketConnection";
import { getAllEvents, getEventById, getMainPageEvents } from "../../apiconnetion/EventConnetion";
import axios from "axios";
import useJettonStore from "../../store/jetton-store/useJettonStore";
import {toast} from "react-toastify";

interface WelcomeProps {}



const Welcome: FC<WelcomeProps> = ({}) => {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    getAllEvents()
    .then((res) => setEvents(res.data))
    .catch(() => console.log("Error occured while fetching events"));

    getMainPageEvents()
    .then((res) => console.log(res.data));

  }, [])

  const { address } = useConnectionStore();
  // const {jettonWalletAddress} = useJettonStore();
 
  // console.log("jettonWalletAddress",jettonWalletAddress);

  const handleMyClick = async () => {

    try {
      const connection = WalletConnection.getConnection();
        // await jettonDeployController.transferTon(connection,
        //   "EQCEZ7FGzA-ZrWaAhB7Fi5BA95pYomKh-qXUZfUet1O7Oxt2",
        //   0.25
        // )
        const result = await jettonDeployController.getJettonDetails(
          Address.parse("EQCwzQdjuy48_hf64Pobm6JllPjvIcZNfBtT2tXpmNzRk7Fs"),
          address ? Address.parse(address) : zeroAddress(),
          connection,
        );
        console.log("result", result.jettonWallet?.jWalletAddress.toFriendly());
         await jettonDeployController.transfer(connection,
           new BN(13),
           "EQATwsrbvkc0HTGU-u7v9SQO8B671e7MTiAbgcEa10zX3UpU",
           address?.toString() || zeroAddress.toString(),
           result.jettonWallet?.jWalletAddress.toFriendly() || zeroAddress.toString()
           )
      console.log("succcesfful");
    } catch (e) {
      console.log("not succcesfful:", e);
    }
  };

  const [tonConnectUI, setOptions] = useTonConnectUI();

  const mySendTransaction = async () => {
    // in "EQAACzDtw5l3OujmB2q_GzMNkg4YFvYTuUNRve7xCTKCu8F6" this address call sendIncrement function in testnet

    //create My transaction as sendTransactionRequest
    let myTransaction: SendTransactionRequest = {
      validUntil: 1000000000000000,
      messages: [
        {
          address: "EQAACzDtw5l3OujmB2q_GzMNkg4YFvYTuUNRve7xCTKCu8F6",
          amount: "50000000",
          // stateInit: "te6ccgEBAQEAAgAAAAA=",
          payload: "selam",
        },
      ],
    };

    //send my transaction on testnet
    let result = await tonConnectUI.sendTransaction(myTransaction);
    console.log(result);
  };

  const notify = () => {
    toast.success('Jeton successfully purchased!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
};

  return (
    <div>
      TEST PAGE
      <button style={{ backgroundColor: "white" }} onClick={mySendTransaction}>
        Click
      </button>
      <button className="p-5 d-flex" onClick={handleMyClick}>
        Clickkkkkkk
      </button>

      <div className="test-for-events">
        <div className="test-for-events__title">Events TESTER</div>
        {/* map events in div */}
        <div className="test-for-events__events">
          {events.map((event) => (
            <div className="test-for-events__events__event">
              <div className="test-for-events__events__event__title">
                {event.name}
              </div>
            </div>
          ))}
        </div>
        <button onClick={notify}>Notify!</button>
      </div>

    </div>
  );
};

export default Welcome;
