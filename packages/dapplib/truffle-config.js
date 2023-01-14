require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad idea drink fresh skirt'; 
let testAccounts = [
"0xf25b3b7e730d1447dbb105a9c0fdd289c2c8baaf7fe382de9474009d9328a425",
"0xb4bd8807c0cc485efea703e551204025d616914ee991092791d4055adcde41e7",
"0xf50f6f08dc9c555ca5a27acc44e17edb16a168dea68bc705c94e7535cc22c4ae",
"0x7276c945323c5a1efec02ac9b27a65f9f8a05f20b618770961d36b16eaa4d925",
"0xff7b9e5b7efe517d076220b9d2c0ee195fbc63150422a6c3eeca2280a182e4ae",
"0x708516d27ba6920351cd1c98b57a1290f63fd17a7ba6a34154037a8f91dbfcb4",
"0xdec897dcbb28af1fa7e61df9446c87455a300f701ab0eaa336c20a3d40e242c1",
"0x7a7389ae7da8cd9d859bd0a64fcd2eff515efc0bd799fedccd36d1044a20b077",
"0xb1a7a7480dddaf3f96f816fb99e552fc991b7f40955ca8c33a37ad498dfa166d",
"0x30e1b1bb3052ed637f0db4a7f36762d262eaaa2c2059d6943745f0de0477afcf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

