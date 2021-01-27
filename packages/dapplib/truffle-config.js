require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind hub include clinic fringe slide'; 
let testAccounts = [
"0xf6242dac22b97b6ee642421ba5918cfca12bcd8bb0909427375cd1add6a726ed",
"0x5f7bf482f5481177c8f4537bca9b9fd708dbe2aa8eec2ff6120665fd89d44611",
"0x391c8adf329bd2ee08f34e5ecd7e82fbdd4c25a8aabca3e4659ee718f2893384",
"0x31b429da9bdc4b4fbe0fe9729c8ab626ff5d207b48ff1618cccfde05a385ed10",
"0x977ed95dc0b7a39bdb125628e0c98483efa41927bae6aeff0d35a189e3dd0f16",
"0xa2f522e55abeb4a56661f1920589aec0262d4d71291f1ebd3fb2d36acd5cf4e3",
"0xa627c90533f1e1811fefd389ddd66e39659665294e87090a88f09111d21aee8d",
"0x90eb401bc6d23132cd8c1abd41d580aaf298b461697d537ab5ab09a040e3b1d5",
"0x99cc25406ef2c81c25fabcf0e8bc725b33afa597bfb345edc9f424e57a889ae5",
"0x7056551eeb4cdb3f2dfff6627b40cabe427a7f16de333351335fdfd1f37c3403"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
