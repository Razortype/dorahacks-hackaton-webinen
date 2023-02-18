import React, { FC, useEffect, useState } from "react";

import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { SendTransactionRequest } from "@tonconnect/sdk/lib/types/models/methods/send-transaction/send-transaction-request";

interface WelcomeProps {

}



const Welcome: FC<WelcomeProps> = ({}) => {

    const [tonConnectUI, setOptions] = useTonConnectUI();

    const mySendTransaction = async() => {
        // in "EQAACzDtw5l3OujmB2q_GzMNkg4YFvYTuUNRve7xCTKCu8F6" this address call sendIncrement function in testnet

        //create My transaction as sendTransactionRequest
        let myTransaction: SendTransactionRequest = {
            validUntil: 1000000000000000,
            messages : [{
                address: "EQAACzDtw5l3OujmB2q_GzMNkg4YFvYTuUNRve7xCTKCu8F6",
                amount: "50000000",
                // stateInit: "te6ccgEBAQEAAgAAAAA=",
                payload: "selam",
            }]
        }

        //send my transaction on testnet
        let result = await tonConnectUI.sendTransaction(myTransaction);
        console.log(result);       
    }

    return (
        <div>
            TEST PAGE
            <button style={{backgroundColor:"white"}} onClick={mySendTransaction}>Click</button>
        </div>
    );
};

export default Welcome