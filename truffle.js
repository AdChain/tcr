const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

let secrets;
let mnemonic = '';

if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  mnemonic = secrets.test;
} else {
  console.log('WARNING!!! DO NOT USE THIS MNEMONIC ON MAINNET ETHEREUM. YOU WILL LOSE YOUR ETHER.')
  // DO NOT USE THIS ON MAINNET
  mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';
}

module.exports = {
  networks: {
    test: {
      provider: new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 20000000000,
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, 'https://mainnet.infura.io'),
      network_id: '1',
      gas: 4500000,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: '*',
      gas: 4500000,
      gasPrice: 20000000000,
    },
  },
};
