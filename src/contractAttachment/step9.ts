import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, Address } from "ton";
import Counter from "./counter"; // this is the interface class we just implemented

export default async function getMyCounter() {
  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });

  // open Counter instance by address
  const counterAddress = Address.parse(
    "EQAACzDtw5l3OujmB2q_GzMNkg4YFvYTuUNRve7xCTKCu8F6"
  ); // replace with your address from step 8
  const counter = new Counter(counterAddress);
  const counterContract = client.open(counter);

  // call the getter on chain
  const counterValue = await counterContract.getCounter();
  console.log("value:", counterValue.toString());
  return counterValue.toString();
}

getMyCounter();