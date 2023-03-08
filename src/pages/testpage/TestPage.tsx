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
interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {
  const { address } = useConnectionStore();

  const handleMyClick = async () => {
    try {
      const connection = WalletConnection.getConnection();
      // await jettonDeployController.transfer(
      //     connection,
      //     toDecimalsBN("1",9),
      //     "EQATwsrbvkc0HTGU-u7v9SQO8B671e7MTiAbgcEa10zX3UpU",
      //     address,
      //     "EQAYMJEhVfmsoHP4VGgf1ivtKcq6KIE9lcdH4jpRVpU-xvwm"
      // )
    //   await connection.requestTransaction({
    //     to: Address.parse("EQAYMJEhVfmsoHP4VGgf1ivtKcq6KIE9lcdH4jpRVpU-xvwm"),
    //     value: toNano(0.05),
    //     message: burn(new BN(100000000000), Address.parse("EQCEZ7FGzA-ZrWaAhB7Fi5BA95pYomKh-qXUZfUet1O7Oxt2")),
    //   });
        await jettonDeployController.mint(connection,
            Address.parse("EQAYMJEhVfmsoHP4VGgf1ivtKcq6KIE9lcdH4jpRVpU-xvwm"),
              new BN(1000000000)
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

  return (
    <div>
      TEST PAGE
      <button style={{ backgroundColor: "white" }} onClick={mySendTransaction}>
        Click
      </button>
      <button className="p-5 d-flex" onClick={handleMyClick}>
        Clickkkkkkk
      </button>
    </div>
  );
};

export default Welcome;
