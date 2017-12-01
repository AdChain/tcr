const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

let secrets;
let mnemonic = '';

if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  mnemonic = secrets.mnemonic;
}

module.exports = {
  networks: {
    ganache: {
      provider: new HDWalletProvider(mnemonic, 'http://127.0.0.1:7545'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 25000000000,
    },
  },
};
