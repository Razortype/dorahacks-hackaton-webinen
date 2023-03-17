import tonMnemonic from "tonweb-mnemonic";
import TonWeb from "tonweb";
import { AddressType } from "tonweb";
import ton from "ton"

// var tonMnemonic = require('tonweb-mnemonic');
// var TonWeb = require('tonweb');

export default async function sendNft(myNftAdress:string, toAddress:String){

const walletVersion = 'v3R2'; // v3R2, v4R2, etc.. from tonscan.org
const nftAddresses = [
    myNftAdress // comma-separated NFT addresses in '',""
    // 'EQChG0Azn4atp3ZCXqVRAP2gMUdabmLoDi9sRO1V2qGlnK6k'
];
const destinationAddress:AddressType = <AddressType>(toAddress); // your new address



    const {NftItem} = TonWeb.token.nft;
    const tonweb = new TonWeb(new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC'));
    // const keyPair = await tonMnemonic.mnemonicToKeyPair(mnemonicParts);
    // console.log(keyPair);
    
    const WalletClass = tonweb.wallet.all[walletVersion];
    const wallet = new WalletClass(tonweb.provider, {
        publicKey: new Uint8Array([
            62, 101,  63, 201, 231,  56, 182, 254,
           199,  38, 244, 239, 121, 218, 113,  74,
           210, 186, 118, 171,  40, 160,  16, 105,
           125, 112,   6, 163, 210,  59, 162,  63
         ]),
        wc: 0
    });
    transfer(nftAddresses[0]);
    async function transfer(nftAddress: string) {
        const myAddress = new TonWeb.utils.Address(destinationAddress);
        const nftItem = new NftItem(tonweb.provider, {address: nftAddress});

        const seqno = (await wallet.methods.seqno().call()) || 0;
        console.log({seqno});
        await new Promise(resolve => setTimeout(resolve, 1000));

        const amount = TonWeb.utils.toNano(0.04);

        console.log(
            await wallet.methods.transfer({
                secretKey:new Uint8Array([
                    182,  46, 225, 236, 209,  92,  21,  42, 188, 214, 239,
                    242, 217,  80, 242,  73,  89, 148,  56, 193, 150, 117,
                     51, 205,   8,  98, 153, 179,   0, 248, 142, 208,  62,
                    101,  63, 201, 231,  56, 182, 254, 199,  38, 244, 239,
                    121, 218, 113,  74, 210, 186, 118, 171,  40, 160,  16,
                    105, 125, 112,   6, 163, 210,  59, 162,  63
                  ]),
                toAddress: <AddressType>(toAddress),
                amount: amount,
                seqno: seqno,
                payload: await nftItem.createTransferBody({
                    newOwnerAddress: myAddress,
                    forwardAmount: TonWeb.utils.toNano(0.02),
                    forwardPayload: new TextEncoder().encode('gift'),
                    responseAddress: myAddress
                }),
                sendMode: 3,
            }).send().catch(e => console.log(e))
        );
    }

    // let i = 0;
    // nftAddresses.forEach((e:string) => {
    //     setTimeout(() => transfer(e:String), i*24000)
    //     i++;
    // })

}