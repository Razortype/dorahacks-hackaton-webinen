import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, WalletContractV4, Address } from "ton";
import Counter from "./counter"; // this is the interface class we just implemented

export default async function main(userPublicKey: string, userSecretKey: string) {
  // initialize ton rpc client on testnet
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });

  // open wallet v4 (notice the correct wallet version here)
  const wallet = WalletContractV4.create({
    publicKey: userPublicKey,
    workchain: 0,
  });

  // open wallet and read the current seqno of the wallet
  const walletContract = client.open(wallet);
  const walletSender = walletContract.sender(userSecretKey);
  const seqno = await walletContract.getSeqno();

  // open Counter instance by address
  const counterAddress = Address.parse(
    "EQAACzDtw5l3OujmB2q_GzMNkg4YFvYTuUNRve7xCTKCu8F6"
  ); // replace with your address from step 8
  const counter = new Counter(counterAddress);
  const counterContract = client.open(counter);

  // send the increment transaction
  await counterContract.sendIncrement(walletSender);

  // wait until confirmed
  let currentSeqno = seqno;
  while (currentSeqno == seqno) {
    console.log("waiting for transaction to confirm...");
    await sleep(1500);
    currentSeqno = await walletContract.getSeqno();
  }
  console.log("transaction confirmed!");
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
