const TonWeb = require("tonweb");
const tonweb_mnemonic_1 = require("tonweb-mnemonic");

function hexToBytes(hex) {
	    for (var bytes = [], c = 0; c < hex.length; c += 2)
		        bytes.push(parseInt(hex.substr(c, 2), 16));
	    return new Uint8Array(bytes);
}

(async () => {
const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));
// const seed = hexToBytes('796dfd95f5833fb99bc658c5403c53fe1af98dea4f6cdd394102e5519c08402a5c062e76db4a86a078551d8e590806f6f8f16e7026ea2aa3f918cb1f892f5f55');
// mnemonic key to seed
// const keyPair = TonWeb.utils.nacl.sign.keyPair.fromSecretKey(seed);
const keyPair = tonweb_mnemonic_1.mnemonicToKeyPair("master brown strategy crouch olympic artefact rib recipe crumble loyal powder ribbon potato palm connect type female position test useful nasty brother all office");
    const wallets = Object.keys(tonweb.wallet.all);
    for (let i = 0; i < wallets.length; i++) {
    const WalletClass = tonweb.wallet.all[wallets[i]];
    const wallet = new WalletClass(tonweb.provider, {
	            publicKey: keyPair.publicKey,
	            wc: 0
	        });
    const walletAddress = await wallet.getAddress();
    const walletAddressString = walletAddress.toString(true, true, true);
    console.log(wallets[i] + ' wallet address= https://tonwhales.com/explorer/address/' + walletAddressString);
    console.log(wallets[i] + ' wallet address= https://test.tonwhales.com/explorer/address/' + walletAddressString);
    }
})();